import { memo } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";

const { REACT_APP_API_URL } = process.env;

function CollectionsListItem({ collection }) {
  return (
    <div className="col-md-4 mb-5">
      <div className="item position-relative">
        <div className="item-overlay"></div>
        <img
          src={REACT_APP_API_URL + collection.thumb}
          alt={collection.title}
        />
        <h3 className="item-title position-absolute">
          <Link to={"/collections/" + collection.id + "/" + collection.slug}>
            {collection.title}
          </Link>
        </h3>
      </div>
    </div>
  );
}

export default memo(CollectionsListItem);
