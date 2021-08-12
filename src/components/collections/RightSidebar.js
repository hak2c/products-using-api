import ProductContent from "./ProductContent";

export default function RightSidebar({ products }) {
  return (
    <aside className="col-lg-9 collection-products">
      <div className="row mx-lg-0 products-list">
        {products.map((product) => (
          <ProductContent
            key={product.id}
            product={product}
            colClass="col-6 col-md-4"
          />
        ))}
      </div>
    </aside>
  );
}
