import SlideMobileMenu from "./SlideMobileMenu";

import cartSrc from "../../images/icons/cart-mobile.png";
import mobileIcn from "../../images/icons/mobile-icon.png";
import logo from "../../images/logo.jpg";

import { useState } from "react";

export default function MobileMenu({ collections }) {
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
            <a href="index.html">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="col-2">
            <span className="cart">
              <img className="mr-1" src={cartSrc} alt="" />
              <span className="cart-count">0</span>
            </span>
          </div>
        </div>
      </div>
      {showMenu && (
        <SlideMobileMenu
          collections={collections}
          showMenu={showMenu}
          setShowMenu={setShowMenu}
        />
      )}
    </>
  );
}
