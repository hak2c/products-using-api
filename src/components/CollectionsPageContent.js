const URL = "https://testament-store.herokuapp.com/";

export default function CollectionsPageContent({ currentCollection }) {
  return (
    <>
      <div className="collection-image">
        <img src={URL + currentCollection.images[0]} alt="" />
      </div>
      <div class="container"></div>
    </>
  );
}
