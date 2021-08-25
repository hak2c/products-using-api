import { memo, useContext } from "react";
import { useSelector } from "react-redux";
import { AppState } from "../App";

import TopHeader from "./header/TopHeader";
import PrimaryMenu from "./header/PrimaryMenu";
import MobileMenu from "./header/MobileMenu";
import AjaxCart from "./cart/AjaxCart";

import logo from "../images/logo.jpg";

function Header() {
  const { collections } = useContext(AppState);
  const showAjaxCart = useSelector((state) => state.cart.showAjaxCart);
  return (
    <>
      <TopHeader />
      <div className="logo d-none d-lg-block text-center">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <MobileMenu />
      <PrimaryMenu collections={collections} />
      {showAjaxCart && <AjaxCart />}
    </>
  );
}

export default memo(Header);
