import { useEffect, useState, useContext, createContext } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import axios from "axios";

import { API_URL, LIMIT_PER_PAGE } from "./Utils";
import { AppState } from "../App";

import Header from "./Header";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";
import LeftSidebar from "./collections/LeftSidebar";
import RightSidebar from "./collections/RightSidebar";
import CollectionsList from "./CollectionsList";

export const CollectionState = createContext();

// <img src={URL + currentCollection.images[0]} alt="" />
export default function CollectionsPage() {
  const { collections, productsInCart } = useContext(AppState);
  let { collectionId } = useParams();

  const [products, setProducts] = useState([]);
  const [currentCollection, setCurrentCollection] = useState({});

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
          "&_expand=collection" +
          condition +
          "&_limit=" +
          limit +
          "&_page=" +
          page
      )
      .then(function (response) {
        setProducts(response.data);
        setCurrentCollection(response.data[0].collection);
        document.title = response.data[0].collection.title;
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
    setPage(1);
  }, [collectionId]);

  return (
    <CollectionState.Provider
      value={{
        products,
        currentCollection,
        sortCondition,
        setSortCondition,
        page,
        totalPages,
        setPage,
        spinner,
        setSpinner,
      }}
    >
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs location={currentCollection.title} />
          <div className="page-title">
            <h3>{currentCollection.title}</h3>
          </div>
          <div className="row">
            <LeftSidebar />
            <RightSidebar />
          </div>
        </div>
      </main>
      <CollectionsList collections={collections} />
      <footer>
        <Footer collections={collections} />
      </footer>
    </CollectionState.Provider>
  );
}
