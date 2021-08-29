import { Collapse } from "bootstrap";
import { useState, useEffect, useContext, memo } from "react";
import { useSelector } from "react-redux";

import { CollectionState } from "./CollectionsPage";
import * as Unicons from "@iconscout/react-unicons";

function LeftSidebar() {
  const { currentCollection } = useSelector((state) => state.collections);
  const { sortCondition, setSortCondition } = useContext(CollectionState);
  let [toggle, setToggle] = useState(false);

  useEffect(() => {
    let myCollapse = document.getElementById("left-sidebar-content");
    let bsCollapse = new Collapse(myCollapse, { toggle: false });
    toggle ? bsCollapse.show() : bsCollapse.hide();
  });

  return (
    <aside className="col-lg-3 left-sidebar">
      <div className="d-lg-none">
        <a
          className="d-block text-center mobile-refine"
          onClick={() => setToggle(!toggle)}
        >
          <Unicons.UilBars size="24" color="#000000" /> Refine
        </a>
      </div>
      <div id="left-sidebar-content">
        <div className="sidebar-module collection-second-image">
          {typeof currentCollection.images != "undefined" && (
            <img
              src={process.env.REACT_APP_API_URL + currentCollection.images[1]}
              alt=""
            />
          )}
        </div>
        <div className="sidebar-module sort-product">
          <select
            name="sort-select"
            id="sort-select"
            className="form-control"
            value={sortCondition}
            onChange={(e) => setSortCondition(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="title-ascending">Alphabetically, A-Z</option>
            <option value="title-descending">Alphabetically, Z-A</option>
            <option value="price-ascending">Price, low to high</option>
            <option value="price-descending">Price, high to low</option>
          </select>
        </div>
        <div className="sidebar-module sort-product">
          <h4 className="module-title">Shop with confidence</h4>
          <div className="module-content">
            <p>
              <span style={{ textDecoration: "underline" }}>Free</span>
              Delivery and
              <span style={{ textDecoration: "underline" }}>Free</span> 30 day
              Returns
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default memo(LeftSidebar);
