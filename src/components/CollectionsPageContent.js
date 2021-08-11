import Breadcrumbs from "./Breadcrumbs";
const URL = "https://testament-store.herokuapp.com/";
// <img src={URL + currentCollection.images[0]} alt="" />
export default function CollectionsPageContent({
  products,
  currentCollection,
}) {
  return (
    <>
      <div className="collection-image"></div>
      <div className="container">
        <Breadcrumbs location={"Collection"} />
      </div>
    </>
  );
}
