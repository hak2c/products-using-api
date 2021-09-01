import { useEffect, useState, memo } from "react";
import { useParams } from "react-router-dom";

import productApi from "../../../api/productApi";
import collectionApi from "../../../api/collectionApi";

import Breadcrumbs from "../../../components/Breadcrumbs";
import LeftSidebar from "../components/LeftSidebar";
import CollectionsList from "../../../components/CollectionsList";
import MainContent from "../components/MainContent";

const { REACT_APP_LIMIT_PER_PAGE } = process.env;

function SubCollectionPage() {
  const [currentCollection, setCurrentCollection] = useState({});
  let { collectionId } = useParams();

  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [sortCondition, setSortCondition] = useState("featured");
  const [page, setPage] = useState(1);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    async function fetchProducts() {
      let params = {
        collectionId: collectionId,
        _expand: "collection",
        _limit: REACT_APP_LIMIT_PER_PAGE,
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
      try {
        const response = await productApi.getProducts(params);
        if (response.status === 200) {
          setProducts(response.data);
          if (response.headers["x-total-count"]) {
            const total = response.headers["x-total-count"];
            setTotalPages(Math.ceil(Number(total) / REACT_APP_LIMIT_PER_PAGE));
          }
          setSpinner(false);
        } else {
          throw response.status + ":" + response.statusText;
        }
      } catch (error) {
        throw error.message;
      }
    }
    fetchProducts();
  }, [sortCondition, page, collectionId]);

  useEffect(() => {
    setPage(1);
    async function getCurrentCollection() {
      const params = {
        id: collectionId,
      };
      try {
        const response = await collectionApi.getCollections(params);
        if (response.status === 200) {
          setCurrentCollection(response.data[0]);
        } else {
          throw response.status + ":" + response.statusText;
        }
      } catch (error) {
        throw error.message;
      }
    }
    getCurrentCollection();
  }, [collectionId]);

  return (
    <>
      <main>
        <div className="container">
          {typeof currentCollection.title !== "undefined" && (
            <>
              <Breadcrumbs location={currentCollection.title} />
              <div className="page-title">
                <h3>{currentCollection.title}</h3>
              </div>
            </>
          )}

          <div className="row">
            <LeftSidebar
              sortCondition={sortCondition}
              setSortCondition={setSortCondition}
            />
            <MainContent
              products={products}
              totalPages={totalPages}
              page={page}
              setPage={setPage}
              spinner={spinner}
              setSpinner={setSpinner}
            />
          </div>
        </div>
      </main>
      <CollectionsList />
    </>
  );
}
export default memo(SubCollectionPage);
