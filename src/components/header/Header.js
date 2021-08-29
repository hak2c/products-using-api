import { memo } from "react";
import { useSelector } from "react-redux";

import TopHeader from "./TopHeader";
import PrimaryMenu from "./PrimaryMenu";
import MobileMenu from "./MobileMenu";
import AjaxCart from "../cart/AjaxCart";

import logo from "../../images/logo.jpg";

function Header() {
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
      <PrimaryMenu />
      {showAjaxCart && <AjaxCart />}
    </>
  );
}

export default memo(Header);
