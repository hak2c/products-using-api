import { memo, useContext } from "react";
import { Pagination } from "react-bootstrap";

import { CollectionState } from "../CollectionsPage";

import ProductContent from "./ProductContent";

function RightSidebar() {
  const { products, page, totalPages, setPage, spinner, setSpinner } =
    useContext(CollectionState);
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === page}
        onClick={
          number !== page ? (e) => handleClickPagination(number) : undefined
        }
      >
        {number}
      </Pagination.Item>
    );
  }
  function handleClickPagination(number) {
    setPage(number);
    setSpinner(true);
  }
  return (
    <aside className="col-lg-9 collection-products">
      {!spinner ? (
        <div className="row mx-lg-0 products-list">
          {products.map((product) => (
            <ProductContent
              key={product.id}
              product={product}
              colClass="col-6 col-md-4 pb-5"
            />
          ))}
        </div>
      ) : (
        <div className="text-center" style={{ padding: "60px 0" }}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}

      {totalPages > 1 && (
        <div className="row mx-lg-0">
          <div className="col-12 text-center">
            <Pagination>{items}</Pagination>
          </div>
        </div>
      )}
    </aside>
  );
}
export default memo(RightSidebar);
