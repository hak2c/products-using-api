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
}) {
  return (
    <>
      <div className="collection-image">
        {typeof currentCollection.images != "undefined" && (
          <img src={URL + currentCollection.images[0]} alt="" />
        )}
      </div>
      <div className="container">
        <Breadcrumbs location={"Collection"} />
        <div className="page-title">
          <h3>{currentCollection.title}</h3>
        </div>
        <div className="row">
          <LeftSidebar
            currentCollection={currentCollection}
            sortCondition={sortCondition}
            setSortCondition={setSortCondition}
          />
          <RightSidebar products={products} />
        </div>
      </div>
    </>
  );
}
