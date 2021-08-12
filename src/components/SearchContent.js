import Breadcrumbs from "./Breadcrumbs";
import ProductContent from "./collections/ProductContent";

export default function SearchContent({
  products,
  searchKey,
  handleChangeSearchInput,
  handleSubmitSearchForm,
}) {
  return (
    <div className="container">
      <Breadcrumbs location={"Search"} />
      <div className="page-title">
        <h3>Search Results</h3>
      </div>
      <div className="row search-results">
        {products.length === 0 ? (
          <>
            <div className="col-12 text-center">
              <p>Your search for "{searchKey}" did not have any result</p>
            </div>
            <div className="col-lg-4 col-md-6 mt-5 mx-auto">
              <form
                name="search"
                onKeyDown={(e) => handleSubmitSearchForm(e)}
                className="search-form form-inline"
              >
                <div className="form-group" style={{ width: "100%" }}>
                  <input
                    className="form-control"
                    id="search"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => handleChangeSearchInput(e)}
                    value={searchKey}
                    style={{ width: "100%" }}
                  />
                </div>
              </form>
            </div>
          </>
        ) : (
          products.map((product) => (
            <ProductContent
              key={product.id}
              product={product}
              colClass="col-6 col-md-3"
            />
          ))
        )}
      </div>
    </div>
  );
}
