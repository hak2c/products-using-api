import { useContext } from "react";

import SlideMobileMenu from "./SlideMobileMenu";

import { HeaderState } from "../Header";

import cartSrc from "../../images/icons/cart-mobile.png";
import mobileIcn from "../../images/icons/mobile-icon.png";
import logo from "../../images/logo.jpg";

import { useState } from "react";

export default function MobileMenu() {
  const {
    collections,
    searchKey,
    handleChangeSearchInput,
    handleSubmitSearchForm,
    productsInCart,
  } = useContext(HeaderState);
  let [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="d-block d-lg-none mobile-logo">
        <div className="d-flex align-items-center h-100">
          <div className="col-2 text-center">
            <a className="text-center mobile-icon">
              <img onClick={() => setShowMenu(true)} src={mobileIcn} alt="" />
            </a>
          </div>
          <div className="col-8 text-center">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="col-2">
            <span className="cart">
              <img className="mr-1" src={cartSrc} alt="" />
              <span className="cart-count">{productsInCart.length}</span>
            </span>
          </div>
        </div>
      </div>
      {showMenu && (
        <SlideMobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      )}
    </>
  );
}
