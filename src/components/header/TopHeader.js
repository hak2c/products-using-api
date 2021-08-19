import { Collapse } from "bootstrap";
import { useContext } from "react";
import * as Unicons from "@iconscout/react-unicons";

import { AppState } from "../../App";
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
                <Unicons.UilFacebookF size="16" color="#ffffff" />
              </a>
              <a href="#">
                <Unicons.UilInstagram size="16" color="#ffffff" />
              </a>
              <a href="#">
                <Unicons.UilTwitter size="16" color="#ffffff" />
              </a>
              <a href="#">
                <Unicons.UilLinkedinAlt size="16" color="#ffffff" />
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
                <Unicons.UilSearch
                  size="16"
                  color="#ffffff"
                  onClick={() => setToggle((toggle) => !toggle)}
                  style={{ cursor: "pointer" }}
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
                <Unicons.UilShoppingCart
                  className="me-1"
                  size="16"
                  color="#ffffff"
                  style={{ cursor: "pointer" }}
                />
                <span className="cart-count">{productsInCart.length}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
