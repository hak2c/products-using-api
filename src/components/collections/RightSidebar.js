import ProductContent from "./ProductContent";

export default function RightSidebar({
  products,
  isSearch,
  searchProductKey,
  handleSubmitProduct,
  handleChangeSearchProductInput,
}) {
  return (
    <aside className="col-lg-9 collection-products">
      {isSearch && products.length === 0 ? (
        <div className="row search-results">
          <div className="col-12 text-center">
            <p>Your search for "{searchProductKey}" did not have any result</p>
          </div>
          <div className="col-lg-4 col-md-6 mt-5 mx-auto">
            <form
              name="search"
              onSubmit={(e) => handleSubmitProduct(e)}
              className="search-form form-inline"
            >
              <div className="form-group" style={{ width: "100%" }}>
                <input
                  className="form-control"
                  id="search"
                  type="text"
                  placeholder="Search"
                  onChange={(e) => handleChangeSearchProductInput(e)}
                  value={searchProductKey}
                  style={{ width: "100%" }}
                />
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="row mx-lg-0 products-list">
          {products.map((product) => (
            <ProductContent key={product.id} product={product} />
          ))}
        </div>
      )}
    </aside>
  );
}
