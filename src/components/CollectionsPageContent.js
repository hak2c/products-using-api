import Breadcrumbs from "./Breadcrumbs";
import LeftSidebar from "./collections/LeftSidebar";
import RightSidebar from "./collections/RightSidebar";

const URL = "https://testament-store.herokuapp.com/";
// <img src={URL + currentCollection.images[0]} alt="" />
export default function CollectionsPageContent({
  products,
  currentCollection,
  sortCondition,
  setSortCondition,
  isSearch,
  searchProductKey,
  handleSubmitProduct,
  handleChangeSearchProductInput,
}) {
  return (
    <>
      <div className="container">
        <Breadcrumbs location={isSearch ? "Search" : "Collection"} />
        <div className="page-title">
          <h3>{isSearch ? "Search Results" : currentCollection.title}</h3>
        </div>
        <div className="row">
          <LeftSidebar
            currentCollection={currentCollection}
            sortCondition={sortCondition}
            setSortCondition={setSortCondition}
            searchProductKey={searchProductKey}
            handleSubmitProduct={handleSubmitProduct}
            handleChangeSearchProductInput={handleChangeSearchProductInput}
          />
          <RightSidebar
            products={products}
            isSearch={isSearch}
            searchProductKey={searchProductKey}
            handleSubmitProduct={handleSubmitProduct}
            handleChangeSearchProductInput={handleChangeSearchProductInput}
          />
        </div>
      </div>
    </>
  );
}
// <div className="collection-image">
// {typeof currentCollection.images != "undefined" && (
//   <img src={URL + currentCollection.images[0]} alt="" />
// )}
// </div>
