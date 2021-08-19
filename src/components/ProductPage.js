import { BrowserRouter as Router, useParams } from "react-router-dom";
import { useContext, useEffect, useState, createContext } from "react";
import axios from "axios";

import { API_URL } from "./Utils";
import { AppState } from "../App";

import Header from "./Header";
import Footer from "./Footer";
import CollectionsList from "./CollectionsList";
import Breadcrumbs from "./Breadcrumbs";
import ProductImages from "./products/ProductImages";
import ProductInformation from "./products/ProductInformation";
import AddCartSuccessMessage from "./popup/AddCartSuccessMessage";

export const ProductState = createContext();

export default function ProductPage() {
  const { collections, productsInCart } = useContext(AppState);

  let { slug } = useParams();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [sizeValue, setSizeValue] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [spinner, setSpinner] = useState(true);
  const [addProductToCartMessage, setAddProductToCartMessage] = useState(false);

  useEffect(() => {
    axios
      .get(API_URL + "products?slug=" + slug + "&_expand=collection")
      .then(function (response) {
        setProduct(response.data[0]);
        document.title = response.data[0].title;
        setSpinner(false);
        for (let i = 0; i < response.data[0].size.length; i++) {
          if (response.data[0].size[i].available) {
            setSizeValue(response.data[0].size[i].name);
            break;
          }
        }
        if (typeof response.data[0].color !== "undefined") {
          for (let i = 0; i < response.data[0].color.length; i++) {
            if (response.data[0].color[i].available) {
              setColorValue(response.data[0].color[i].name);
              break;
            }
          }
        }
      })
      .then(() => {})
      .catch(function (error) {
        console.log(error);
      });
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
        setAddProductToCartMessage,
      }}
    >
      <Header />
      <main>
        <div className="container product__page">
          {typeof product.collection !== "undefined" && (
            <Breadcrumbs location={product.title} />
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
      {addProductToCartMessage && <AddCartSuccessMessage />}
    </ProductState.Provider>
  );
}

// <Breadcrumbs
// location={
//   "<a href='collection/id=" +
//   product.collection.id +
//   "'>" +
//   product.collection.title +
//   "</a> > " +
//   product.title
// }
// />
