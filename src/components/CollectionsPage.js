import { useEffect, useState, createContext, memo } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { API_URL, LIMIT_PER_PAGE } from "./Utils";
import { fetchProductsByCollectionId } from "../features/collections/collectionsSlice";

import Header from "./Header";
import Footer from "./Footer";
import Breadcrumbs from "./Breadcrumbs";
import LeftSidebar from "./collections/LeftSidebar";
import RightSidebar from "./collections/RightSidebar";
import CollectionsList from "./CollectionsList";

export const CollectionState = createContext();

function CollectionsPage() {
  const dispath = useDispatch();
  const { collections, currentCollection } = useSelector(
    (state) => state.collections
  );
  let { collectionId } = useParams();

  const [sortCondition, setSortCondition] = useState("featured");
  const [page, setPage] = useState(1);

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
    dispath(
      fetchProductsByCollectionId(
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
    );
  }, [sortCondition, page, collectionId]);

  useEffect(() => {
    setPage(1);
  }, [collectionId]);

  return (
    <CollectionState.Provider
      value={{
        sortCondition,
        setSortCondition,
        page,
        setPage,
      }}
    >
      <Header />

      <main>
        <div className="container">
          {typeof currentCollection.title !== "undefined" && (
            <Breadcrumbs location={currentCollection.title} />
          )}
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
export default memo(CollectionsPage);
