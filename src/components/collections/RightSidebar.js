import { Pagination } from "react-bootstrap";

import ProductContent from "./ProductContent";

export default function RightSidebar({ products, page, totalPages, setPage }) {
  let items = [];
  for (let number = 1; number <= totalPages; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === page}
        onClick={number !== page ? (e) => setPage(number) : undefined}
      >
        {number}
      </Pagination.Item>
    );
  }
  return (
    <aside className="col-lg-9 collection-products">
      <div className="row mx-lg-0 products-list">
        {products.map((product) => (
          <ProductContent key={product.id} product={product} />
        ))}
      </div>
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
