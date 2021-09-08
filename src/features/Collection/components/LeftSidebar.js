import { Collapse } from "bootstrap";
import { useState, useEffect, memo } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Link, useParams } from "react-router-dom";

import * as Unicons from "@iconscout/react-unicons";

function LeftSidebar({ sortCondition, setSortCondition }) {
  const { collections } = useSelector((state) => state.collections);
  const [active, setActive] = useState(null);
  const params = useParams();

  useEffect(() => {
    setActive(params.collectionId ? params.collectionId : null);
  }, [params]);

  let [toggle, setToggle] = useState(false);

  useEffect(() => {
    let myCollapse = document.getElementById("left__sidebar--content");
    let bsCollapse = new Collapse(myCollapse, { toggle: false });
    toggle ? bsCollapse.show() : bsCollapse.hide();
  });

  return (
    <aside className="col-lg-3 left__sidebar">
      <div className="d-lg-none">
        <a
          className="d-block text-center left__sidebar--mobile-refine"
          onClick={() => setToggle(!toggle)}
        >
          <Unicons.UilBars size="24" color="#000000" /> Refine
        </a>
      </div>
      <div id="left__sidebar--content">
        <div className="left__sidebar--module choose-collections">
          <ul>
            <li>
              <Link
                className={active === null ? "active" : ""}
                to="/collections"
              >
                All Products
              </Link>
            </li>
            {collections?.map((item) => (
              <li key={item.id}>
                <Link
                  className={active == item.id ? "active" : ""}
                  to={"/collections/" + item.id + "/" + item.slug}
                >
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="left__sidebar--module sort-product">
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
        <div className="left__sidebar--module sort-product">
          <h4 className="left__sidebar--module-title">Shop with confidence</h4>
          <div className="left__sidebar--module-content">
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
