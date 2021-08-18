import { BrowserRouter as Router, useParams } from "react-router-dom";
import { createContext, useEffect, useState } from "react";
import axios from "axios";

import { API_URL, CART_KEY } from "./Utils";

import Header from "./Header";
import Footer from "./Footer";
import CollectionsList from "./CollectionsList";
import Breadcrumbs from "./Breadcrumbs";
import ProductImages from "./products/ProductImages";
import ProductInformation from "./products/ProductInformation";

export const ProductState = createContext();

export default function ProductPage() {
  let { slug } = useParams();

  const [collections, setCollections] = useState([]);
  const [product, setProduct] = useState({});
  const [searchKey, setSearchkey] = useState("");
  const [submitSearch, setSubmitSearch] = useState(false);
  const [productsInCart, setProductsInCart] = useState(checkProductsInCart());

  const [spinner, setSpinner] = useState(true);

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

  useEffect(() => {
    axios
      .get(API_URL + "collections")
      .then(function (response) {
        setCollections(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function checkProductsInCart() {
    let prodCart = localStorage.getItem(CART_KEY);
    if (prodCart == null || prodCart == "") {
      localStorage.setItem(CART_KEY, "[]");
      prodCart = "[]";
    }
    prodCart = JSON.parse(prodCart);
    return prodCart;
  }

  function handleSubmitSearchForm(e) {
    e.preventDefault();
    setSubmitSearch(true);
  }

  function handleChangeSearchInput(e) {
    e.preventDefault();
    setSearchkey(e.target.value);
  }

  return (
    <ProductState.Provider
      value={{
        collections,
        searchKey,
        handleChangeSearchInput,
        handleSubmitSearchForm,
        productsInCart,
        setProductsInCart,
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

              <ProductInformation />
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
