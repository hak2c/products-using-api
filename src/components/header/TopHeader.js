import { Collapse } from "bootstrap";
import { useContext } from "react";

import { AppState } from "../../App";

import fbSrc from "../../images/icons/facebook.png";
import instagramSrc from "../../images/icons/instagram.png";
import twitterSrc from "../../images/icons/twitter.png";
import linkedinSrc from "../../images/icons/linkedin.png";
import searchIcn from "../../images/icons/search.png";
import cartSrc from "../../images/icons/cart.png";
import { useState, useEffect } from "react";

export default function TopHeader() {
  const {
    searchKey,
    handleChangeSearchInput,
    handleSubmitSearchForm,
    productsInCart,
  } = useContext(AppState);
  let [toggle, setToggle] = useState(false);

  useEffect(() => {
    let myCollapse = document.getElementById("search-form-1");
    let bsCollapse = new Collapse(myCollapse, { toggle: false });
    toggle ? bsCollapse.show() : bsCollapse.hide();
  });

  function handleSearchForm(e) {
    handleSubmitSearchForm(e);
    setToggle((toggle) => !toggle);
  }
  return (
    <div className="top-header">
      <div className="container">
        <div className="row text-uppercase">
          <div className="d-none d-lg-block col-lg-4">
            <div className="d-flex align-items-center top-socials">
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
          </div>
          <div className="col-lg-4 text-center">
            FREE SHIPPING ON ORDERS OVER $199
          </div>
          <div className="d-none d-lg-block col-lg-4">
            <div
              className="d-flex justify-content-end align-items-center position-relative"
              style={{ gap: "10px" }}
            >
              <span className="search-icon">
                <img
                  onClick={() => setToggle((toggle) => !toggle)}
                  src={searchIcn}
                  alt=""
                />
              </span>
              <form
                className="search-form form-inline"
                id="search-form-1"
                onSubmit={(e) => handleSearchForm(e)}
              >
                <div className="form-group">
                  <input
                    className="form-control"
                    id="search"
                    type="text"
                    placeholder="Search"
                    onChange={(e) => handleChangeSearchInput(e)}
                    value={searchKey}
                  />
                </div>
              </form>

              <span className="cart">
                <img className="mr-1" src={cartSrc} alt="" />
                <span className="cart-count">{productsInCart.length}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
