import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";

import productApi from "../../../api/productApi";

import Breadcrumbs from "../../../components/Breadcrumbs";
import CollectionsList from "../../../components/CollectionsList";
import LeftSidebar from "../components/LeftSidebar";
import MainContent from "../components/MainContent";

const { REACT_APP_LIMIT_PER_PAGE } = process.env;

function MainPage() {
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [sortCondition, setSortCondition] = useState("featured");
  const [page, setPage] = useState(1);
  const [spinner, setSpinner] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      let params = {
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
  }, [sortCondition, page]);

  return (
    <>
      <main>
        <div className="container">
          <Breadcrumbs location="All products" />
          <div className="page-title">
            <h3>All products</h3>
          </div>
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

export default memo(MainPage);
