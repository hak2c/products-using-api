import { useEffect, useRef, useState } from "react";

import Header from "./components/Header";
import CollectionsPageContent from "./components/CollectionsPageContent";
import CollectionsList from "./components/CollectionsList";
import Footer from "./components/Footer";

import "./styles.css";
import "./css/styles.scss";

const API_URL = "https://testament-store.herokuapp.com/";

const url = new URL(window.location.href);
const collectionId = url.searchParams.get("id") || 1;

export default function App() {
  const [products, setProducts] = useState([]);
  const [collections, setCollections] = useState([]);
  const [currentCollection, setCurrentCollection] = useState({});
  const [searchKey, setSearchkey] = useState("");
  const [submitSearch, setSubmitSearch] = useState(null);

  const [sortCondition, setSortCondition] = useState("featured");

  useEffect(() => {
    // if (submitSearch === null) {
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
    // } else if (submitSearch === "searching") {
    //   fetch(
    //     API_URL + "products?title_like=" + searchKey + "&_sort=id&_order=desc"
    //   )
    //     .then((response) => {
    //       response.json().then((data) => {
    //         setProducts(data);
    //         setSubmitSearch("done");
    //       });
    //     })
    //     .catch((error) => console.log(error));
    // }
  }, [sortCondition, submitSearch]);

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
  return (
    <>
      <Header
        collections={collections}
        searchKey={searchKey}
        setSearchkey={setSearchkey}
        setSubmitSearch={setSubmitSearch}
      />
      <main>
        <CollectionsPageContent
          products={products}
          currentCollection={currentCollection}
          sortCondition={sortCondition}
          setSortCondition={setSortCondition}
        />
      </main>
      <CollectionsList collections={collections} />
      <footer>
        <Footer collections={collections} />
      </footer>
    </>
  );
}
