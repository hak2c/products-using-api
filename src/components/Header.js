import { createContext, useContext } from "react";
import { ProductState } from "./ProductPage";

import TopHeader from "./header/TopHeader";
import PrimaryMenu from "./header/PrimaryMenu";
import MobileMenu from "./header/MobileMenu";

import logo from "../images/logo.jpg";

export const HeaderState = createContext();

export default function Header() {
  const {
    collections,
    searchKey,
    handleChangeSearchInput,
    handleSubmitSearchForm,
    productsInCart,
  } = useContext(ProductState);
  return (
    <HeaderState.Provider
      value={{
        collections,
        searchKey,
        handleChangeSearchInput,
        handleSubmitSearchForm,
        productsInCart,
      }}
    >
      <TopHeader />
      <div className="logo d-none d-lg-block text-center">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <MobileMenu />
      <PrimaryMenu collections={collections} />
    </HeaderState.Provider>
  );
}
