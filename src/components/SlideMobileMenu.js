import { Collapse } from "bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { useContext, useState, useEffect, memo } from "react";
import { useSelector } from "react-redux";
import * as Unicons from "@iconscout/react-unicons";

import { AppState } from "../App";

function SlideMobileMenu({ showMenu, setShowMenu }) {
  const { collections } = useSelector((state) => state.collections);
  const { searchKey, handleChangeSearchInput, handleSubmitSearchForm } =
    useContext(AppState);
  let [toggleSubMenu, setToggleSubMenu] = useState(false);
  useEffect(() => {
    let collapseSubMenu = document.getElementById("sub-menu-1");
    let bsCollapseSubMenu = new Collapse(collapseSubMenu, { toggle: false });
    toggleSubMenu ? bsCollapseSubMenu.show() : bsCollapseSubMenu.hide();
  });
  const animateClass = showMenu
    ? " animate__fadeInLeft"
    : " animate__fadeOutLeft";

  function handleSearchForm(e) {
    handleSubmitSearchForm(e);
    setShowMenu(false);
  }
  return (
    <aside className="animate__animated" id="slideout-mobile-navigation">
      <div className="slideout-mobile-overlay"></div>
      <div
        className={"animate__animated slideout-mobile-content" + animateClass}
      >
        <div className="close-navigation">
          <div
            className="icon-close"
            onClick={() => {
              document.body.classList.toggle("stopScrolling");
              setShowMenu(false);
            }}
          ></div>
        </div>
        <div className="mobile-menu">
          <ul className="nav flex-column justify-content-center">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <a href="#">Shop</a>
              <div
                className="d-inline-block arrow"
                onClick={() => setToggleSubMenu(!toggleSubMenu)}
              >
                <Unicons.UilAngleDown size="21" color="#000000" />
              </div>
            </li>
            <li className="sub-menu" id="sub-menu-1">
              <ul>
                {collections.map((item) => (
                  <li key={item.id}>
                    <Link to={"/collection/" + item.id + "/" + item.slug}>
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li>
              <a href="blogs.html">Blog</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
          </ul>
          <div className="mobile-menu__search">
            <form
              name="search"
              onSubmit={(e) => handleSearchForm(e)}
              className="search-form form-inline"
            >
              <div className="form-group">
                <input
                  className="form-control"
                  id="search"
                  type="text"
                  placeholder="Search"
                  value={searchKey}
                  onChange={(e) => handleChangeSearchInput(e)}
                />
              </div>
            </form>
          </div>
          <div className="d-flex justify-content-center align-items-center mobile-menu__socials">
            <a href="#">
              <Unicons.UilFacebookF size="30" color="#000000" />
            </a>
            <a href="#">
              <Unicons.UilInstagram size="30" color="#000000" />
            </a>
            <a href="#">
              <Unicons.UilTwitter size="30" color="#000000" />
            </a>
            <a href="#">
              <Unicons.UilLinkedinAlt size="30" color="#000000" />
            </a>
          </div>
          <div className="mobile-menu__featured-text text-center">
            <p>
              <strong>Featured Text</strong>
            </p>
            <p>
              <em>A great place to share about a sale!</em>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

export default memo(SlideMobileMenu);
