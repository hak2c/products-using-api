import { BrowserRouter as Router, useParams } from "react-router-dom";
import { useContext, useEffect, useState, createContext, memo } from "react";
import { useSelector } from "react-redux";

import { API_URL, fetchData } from "./Utils";
import { AppState } from "../App";

import Header from "./Header";
import Footer from "./Footer";
import CollectionsList from "./CollectionsList";
import Breadcrumbs from "./Breadcrumbs";
import ProductImages from "./products/ProductImages";
import ProductInformation from "./products/ProductInformation";
import AddCartSuccessMessage from "./cart/AddCartSuccessMessage";

export const ProductState = createContext();

function ProductPage() {
  const addedCartSuccess = useSelector((state) => state.cart.addedCartSuccess);
  const { collections } = useContext(AppState);

  let { slug } = useParams();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [sizeValue, setSizeValue] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    fetchData(API_URL + "products?slug=" + slug + "&_expand=collection").then(
      (res) => {
        const { data } = res;
        setProduct(data[0]);
        document.title = data[0].title;
        setSpinner(false);
        for (let i = 0; i < data[0].size.length; i++) {
          if (data[0].size[i].available) {
            setSizeValue(data[0].size[i].name);
            break;
          }
        }
        if (typeof data[0].color !== "undefined") {
          for (let i = 0; i < data[0].color.length; i++) {
            if (data[0].color[i].available) {
              setColorValue(data[0].color[i].name);
              break;
            }
          }
        }
      }
    );
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
      <Header />
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
      <CollectionsList collections={collections} />
      <footer>
        <Footer collections={collections} />
      </footer>
      {addedCartSuccess && <AddCartSuccessMessage />}
    </ProductState.Provider>
  );
}

export default memo(ProductPage);
