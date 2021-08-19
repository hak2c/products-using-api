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

export const ProductState = createContext();

export default function ProductPage() {
  const { collections, productsInCart } = useContext(AppState);

  let { slug } = useParams();

  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [sizeValue, setSizeValue] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [spinner, setSpinner] = useState(true);

  function handleChangeQuantityInput(e) {
    let value = Number(e.target.value);
    if (!isNaN(value) && value > 1) {
      setQuantity(value);
    }
  }

  useEffect(() => {
    axios
      .get(API_URL + "products?slug=" + slug + "&_expand=collection")
      .then(function (response) {
        setProduct(response.data[0]);
        document.title = response.data[0].title;
        setSpinner(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

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
