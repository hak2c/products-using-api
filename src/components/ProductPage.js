import { BrowserRouter as Router, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
import Footer from "./Footer";
import CollectionsList from "./CollectionsList";
import Breadcrumbs from "./Breadcrumbs";
import ProductImages from "./products/ProductImages";

const API_URL = "https://fake-server-products-api.herokuapp.com/";

export default function ProductPage() {
  let { productId } = useParams();

  const [collections, setCollections] = useState([]);
  const [product, setProduct] = useState({});
  const [searchKey, setSearchkey] = useState("");
  const [submitSearch, setSubmitSearch] = useState(false);

  useEffect(() => {
    axios
      .get(API_URL + "products?id=" + productId + "&_expand=collection")
      .then(function (response) {
        setProduct(response.data[0]);
        document.title = response.data[0].title;
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

  function handleSubmitSearchForm(e) {
    e.preventDefault();
    setSubmitSearch(true);
  }

  function handleChangeSearchInput(e) {
    e.preventDefault();
    setSearchkey(e.target.value);
  }
  return (
    <>
      <Header
        collections={collections}
        searchKey={searchKey}
        handleChangeSearchInput={handleChangeSearchInput}
        handleSubmitSearchForm={handleSubmitSearchForm}
      />
      <main>
        <div className="container">
          <div className="row">
            {typeof product.images != "undefined" && (
              <ProductImages product={product} />
            )}

            <div className="col-lg-6 col-md-5 product-information">
              <div className="product-information-content"></div>
            </div>
          </div>
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
