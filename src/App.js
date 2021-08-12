import { useEffect, useRef, useState } from "react";

import Header from "./components/Header";
import CollectionsPageContent from "./components/CollectionsPageContent";
import CollectionsList from "./components/CollectionsList";
import Footer from "./components/Footer";
import SearchContent from "./components/SearchContent";

import "./styles.css";
import "./css/styles.scss";

const API_URL = "https://testament-store.herokuapp.com/";

const url = new URL(window.location.href);
const collectionId = url.searchParams.get("id") || 1;

export default function App() {
  const [products, setProducts] = useState([]);
  const [collections, setCollections] = useState([]);
  const [currentCollection, setCurrentCollection] = useState({});

  const [isSearch, setIsSearch] = useState(false);
  const [searchKey, setSearchkey] = useState("");
  const [submitSearch, setSubmitSearch] = useState(false);

  const [sortCondition, setSortCondition] = useState("featured");

  useEffect(() => {
    if (isSearch) {
      if (submitSearch) {
        fetch(
          API_URL + "products?title_like=" + searchKey + "&_sort=id&_order=desc"
        )
          .then((response) => {
            response.json().then((data) => {
              setProducts(data);
              setSubmitSearch(false);
            });
          })
          .catch((error) => console.log(error));
      }
    } else {
      let condition =
        sortCondition === "featured"
          ? ""
          : sortCondition === "title-ascending"
          ? "&_sort=title&_order=asc"
          : sortCondition === "title-descending"
          ? "&_sort=title&_order=desc"
          : sortCondition === "price-ascending"
          ? "&_sort=price&_order=asc"
          : sortCondition === "price-descending"
          ? "&_sort=price&_order=desc"
          : "";
      fetch(API_URL + "products?collectionId=" + collectionId + condition)
        .then((response) => {
          response.json().then((data) => {
            setProducts(data);
          });
        })
        .catch((error) => console.log(error));
    }
  }, [sortCondition, isSearch, submitSearch]);

  useEffect(() => {
    fetch(API_URL + "collections")
      .then((response) =>
        response.json().then((data) => {
          setCollections(data);
          setCurrentCollection(data.filter((e) => e.id === collectionId)[0]);
        })
      )
      .catch((error) => console.log(error));
  }, []);

  function handleSubmitSearchForm(e) {
    e.preventDefault();
    setSubmitSearch(true);
    setIsSearch(true);
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
        {!isSearch ? (
          <CollectionsPageContent
            products={products}
            currentCollection={currentCollection}
            sortCondition={sortCondition}
            setSortCondition={setSortCondition}
          />
        ) : (
          <SearchContent
            products={products}
            searchKey={searchKey}
            handleChangeSearchInput={handleChangeSearchInput}
            handleSubmitSearchForm={handleSubmitSearchForm}
          />
        )}
      </main>
      <CollectionsList collections={collections} />
      <footer>
        <Footer collections={collections} />
      </footer>
    </>
  );
}
