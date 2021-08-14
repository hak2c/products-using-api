import { Collapse } from "bootstrap";
import { BrowserRouter as Router, Link } from "react-router-dom";

import arrowDownIcn from "../../images/icons/arrow-down-mobile.png";
import fbSrc from "../../images/icons/facebook-subc.png";
import instagramSrc from "../../images/icons/instagram-subc.png";
import twitterSrc from "../../images/icons/twitter-subc.png";
import linkedinSrc from "../../images/icons/linkedin-subc.png";

import { useState, useEffect } from "react";

export default function SlideMobileMenu({
  collections,
  showMenu,
  setShowMenu,
  searchKey,
  handleChangeSearchInput,
  handleSubmitSearchForm,
}) {
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
          <div className="icon-close" onClick={() => setShowMenu(false)}></div>
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
                <img src={arrowDownIcn} alt="" />
              </div>
            </li>
            <li className="sub-menu" id="sub-menu-1">
              <ul>
                {collections.map((item) => (
                  <li key={item.id}>
                    <Link to={"/collection/" + item.id}>{item.title}</Link>
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
              <img src={fbSrc} alt="facebook" />
            </a>
            <a href="#">
              <img src={instagramSrc} alt="instagram" />
            </a>
            <a href="#">
              <img src={twitterSrc} alt="twitter" />
            </a>
            <a href="#">
              <img src={linkedinSrc} alt="linkedin" />
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
