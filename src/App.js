import { useEffect, useRef, useState } from "react";

import Header from "./components/Header";
import CollectionsPageContent from "./components/CollectionsPageContent";
import CollectionsList from "./components/CollectionsList";

import "./styles.css";
import "./css/styles.scss";

const API_URL = "https://testament-store.herokuapp.com/";

const url = new URL(window.location.href);
const collectionId = url.searchParams.get("id") || 1;

export default function App() {
  const [products, setProducts] = useState([]);
  const [collections, setCollections] = useState([]);
  const [currentCollection, setCurrentCollection] = useState({});

  const [sortCondition, setSortCondition] = useState("");

  useEffect(() => {
    fetch(API_URL + "products?collectionId=" + collectionId)
      .then((response) => {
        response.json().then((data) => {
          setProducts(data);
        });
      })
      .catch((error) => console.log(error));
  }, [sortCondition]);

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
      <Header collections={collections} />
      <main>
        <CollectionsPageContent
          products={products}
          currentCollection={currentCollection}
        />
      </main>
      <CollectionsList collections={collections} />
    </>
  );
}
