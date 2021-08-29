import { BrowserRouter as Router, useParams } from "react-router-dom";
import { useEffect, useState, createContext, memo } from "react";
import { useSelector } from "react-redux";

import productApi from "../../api/productApi";

import CollectionsList from "../collections/CollectionsList";
import Breadcrumbs from "../Breadcrumbs";
import ProductImages from "./ProductImages";
import ProductInformation from "./ProductInformation";
import AddCartSuccessMessage from "../cart/AddCartSuccessMessage";

export const ProductState = createContext();

function ProductPage() {
  const addedCartSuccess = useSelector((state) => state.cart.addedCartSuccess);

  let { slug } = useParams();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [sizeValue, setSizeValue] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const params = {
          slug: slug,
          _expand: "collection",
        };
        const response = await productApi.getProducts(params);
        const resProduct = response.data[0];
        setProduct(resProduct);
        document.title = resProduct.title;
        setSpinner(false);
        for (let i = 0; i < resProduct.size.length; i++) {
          if (resProduct.size[i].available) {
            setSizeValue(resProduct.size[i].name);
            break;
          }
        }
        if (typeof resProduct.color !== "undefined") {
          for (let i = 0; i < resProduct.color.length; i++) {
            if (resProduct.color[i].available) {
              setColorValue(resProduct.color[i].name);
              break;
            }
          }
        }
      } catch (error) {
        console.log("Fail ", error);
      }
    };
    fetchProducts();
  }, []);

  function handleChangeQuantityInput(e) {
    let value = Number(e.target.value);
    if (!isNaN(value) && value > 1) {
      setQuantity(value);
    }
  }

  return (
    <ProductState.Provider
      value={{
        product,
        quantity,
        sizeValue,
        colorValue,
        handleChangeQuantityInput,
        setQuantity,
        setSizeValue,
        setColorValue,
      }}
    >
      <main>
        <div className="container product__page">
          {typeof product.collection !== "undefined" && (
            <Breadcrumbs
              location={
                "<a href='collection/" +
                product.collection.id +
                "/" +
                product.collection.slug +
                "'> " +
                product.collection.title +
                "</a> &gt; " +
                product.title
              }
            />
          )}

          {!spinner ? (
            <div className="row">
              {typeof product.images != "undefined" &&
                product.images.length > 0 && (
                  <ProductImages images={product.images} />
                )}

              <ProductInformation product={product} />
            </div>
          ) : (
            <div className="text-center" style={{ padding: "60px 0" }}>
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
      </main>
      <CollectionsList />
      {addedCartSuccess && <AddCartSuccessMessage />}
    </ProductState.Provider>
  );
}

export default memo(ProductPage);
