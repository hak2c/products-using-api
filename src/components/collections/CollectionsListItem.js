const URL = "https://testament-store.herokuapp.com/";
export default function CollectionsListItem({ collection }) {
  return (
    <div className="col-md-4 mb-5">
      <div className="item position-relative">
        <div className="item-overlay"></div>
        <img src={URL + collection.thumb} alt={collection.title} />
        <h3 className="item-title position-absolute">
          <a href={"collections.html?id=" + collection.id}>
            {collection.title}
          </a>
        </h3>
      </div>
    </div>
  );
}
