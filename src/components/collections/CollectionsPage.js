import { useEffect, useState, createContext, memo } from "react";
import { BrowserRouter as Router, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { API_URL, LIMIT_PER_PAGE } from "../Utils";
import { fetchProductsByCollectionId } from "../../features/collections/collectionsSlice";

import Breadcrumbs from "../Breadcrumbs";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";
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
    let params = {
      collectionId: collectionId,
      _expand: "collection",
      _limit: limit,
      _page: page,
    };
    if (sortCondition === "title-ascending") {
      params["_sort"] = "title";
      params["_order"] = "asc";
    } else if (sortCondition === "title-descending") {
      params["_sort"] = "title";
      params["_order"] = "desc";
    } else if (sortCondition === "price-ascending") {
      params["_sort"] = "price";
      params["_order"] = "asc";
    } else if (sortCondition === "price-descending") {
      params["_sort"] = "price";
      params["_order"] = "desc";
    }
    dispath(fetchProductsByCollectionId(params));
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
    </CollectionState.Provider>
  );
}
export default memo(CollectionsPage);
