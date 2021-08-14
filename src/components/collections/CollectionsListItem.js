import { BrowserRouter as Router, Link } from "react-router-dom";

const URL = "https://fake-server-products-api.herokuapp.com/";

export default function CollectionsListItem({ collection }) {
  return (
    <div className="col-md-4 mb-5">
      <div className="item position-relative">
        <div className="item-overlay"></div>
        <img src={URL + collection.thumb} alt={collection.title} />
        <h3 className="item-title position-absolute">
          <Link to={"/collection/" + collection.id}>{collection.title}</Link>
        </h3>
      </div>
    </div>
  );
}
