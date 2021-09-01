import { memo } from "react";

import ProductContent from "./ProductContent";
import PaginationContent from "../../../components/PaginationContent";

function MainContent({
  products,
  totalPages,
  page,
  setPage,
  spinner,
  setSpinner,
}) {
  return (
    <aside className="col-lg-9 collection-products">
      {!spinner ? (
        <>
          <div className="row mx-lg-0 products-list">
            {products.length > 0 ? (
              products.map((product) => (
                <ProductContent
                  key={product.id}
                  product={product}
                  colClass="col-6 col-md-4 pb-5"
                />
              ))
            ) : (
              <div className="col-12 text-center">
                <h3>No products found.</h3>
              </div>
            )}
          </div>
          {totalPages > 1 && (
            <PaginationContent
              totalPages={totalPages}
              page={page}
              setPage={setPage}
              setSpinner={setSpinner}
            />
          )}
        </>
      ) : (
        <div className="text-center" style={{ padding: "60px 0" }}>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      )}
    </aside>
  );
}
export default memo(MainContent);
