import { BrowserRouter as Router, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import axios from "axios";

import { API_URL } from "./Utils";
import { AppState } from "../App";

import Header from "./Header";
import Footer from "./Footer";
import CollectionsList from "./CollectionsList";
import Breadcrumbs from "./Breadcrumbs";
import ProductImages from "./products/ProductImages";
import ProductInformation from "./products/ProductInformation";

export default function ProductPage() {
  const { collections, productsInCart } = useContext(AppState);

  let { slug } = useParams();

  const [product, setProduct] = useState({});
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

  return (
    <>
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
    </>
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
