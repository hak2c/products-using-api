import { createContext, memo, useContext, useState } from "react";
import { AppState } from "../App";

import TopHeader from "./header/TopHeader";
import PrimaryMenu from "./header/PrimaryMenu";
import MobileMenu from "./header/MobileMenu";
import AjaxCart from "./cart/AjaxCart";

export const HeaderState = createContext();

import logo from "../images/logo.jpg";

function Header() {
  const { collections, productsInCart } = useContext(AppState);
  const [showAjaxCart, setShowAjaxCart] = useState(false);
  return (
    <HeaderState.Provider value={{ showAjaxCart, setShowAjaxCart }}>
      <TopHeader />
      <div className="logo d-none d-lg-block text-center">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <MobileMenu />
      <PrimaryMenu collections={collections} />
      {showAjaxCart && <AjaxCart />}
    </HeaderState.Provider>
  );
}

export default memo(Header);
