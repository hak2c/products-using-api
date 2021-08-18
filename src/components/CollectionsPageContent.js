import { useEffect, useState } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import axios from "axios";

import { API_URL } from "./Utils";

import Header from "./Header";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";
import LeftSidebar from "./collections/LeftSidebar";
import RightSidebar from "./collections/RightSidebar";
import CollectionsList from "./CollectionsList";

const LIMIT_PER_PAGE = 3;
// <img src={URL + currentCollection.images[0]} alt="" />
export default function CollectionsPageContent() {
  let { collectionId } = useParams();

  const [collections, setCollections] = useState([]);
  const [products, setProducts] = useState([]);
  const [currentCollection, setCurrentCollection] = useState({});

  const [searchKey, setSearchkey] = useState("");
  const [submitSearch, setSubmitSearch] = useState(false);
  const [submitProductSearch, setSubmitProductSearch] = useState(false);

  const [sortCondition, setSortCondition] = useState("featured");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const [spinner, setSpinner] = useState(true);

  const limit = LIMIT_PER_PAGE;

  useEffect(() => {
    let condition =
      sortCondition === "title-ascending"
        ? "&_sort=title&_order=asc"
        : sortCondition === "title-descending"
        ? "&_sort=title&_order=desc"
        : sortCondition === "price-ascending"
        ? "&_sort=price&_order=asc"
        : sortCondition === "price-descending"
        ? "&_sort=price&_order=desc"
        : "";
    axios
      .get(
        API_URL +
          "products?collectionId=" +
          collectionId +
          condition +
          "&_limit=" +
          limit +
          "&_page=" +
          page
      )
      .then(function (response) {
        setProducts(response.data);
        setTotalPages(
          Math.ceil(Number(response.headers["x-total-count"]) / limit)
        );
        setSpinner(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [sortCondition, page, collectionId]);

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
  useEffect(() => {
    setPage(1);
    axios
      .get(API_URL + "collections?id=" + collectionId)
      .then(function (response) {
        setCurrentCollection(response.data[0]);
        document.title = response.data[0].title;
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [collectionId]);

  function handleSubmitSearchForm(e) {
    e.preventDefault();
    setSubmitSearch(true);
  }

  function handleChangeSearchInput(e) {
    e.preventDefault();
    setSearchkey(e.target.value);
  }

  function handleSubmitProduct(e) {
    e.preventDefault();
    setSubmitProductSearch(true);
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
          <Breadcrumbs location={currentCollection.title} />
          <div className="page-title">
            <h3>{currentCollection.title}</h3>
          </div>
          <div className="row">
            <LeftSidebar
              currentCollection={currentCollection}
              sortCondition={sortCondition}
              setSortCondition={setSortCondition}
            />
            <RightSidebar
              products={products}
              page={page}
              totalPages={totalPages}
              setPage={setPage}
              spinner={spinner}
              setSpinner={setSpinner}
            />
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
