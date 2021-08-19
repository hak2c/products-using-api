import { useContext } from "react";
import { AppState } from "../App";

import TopHeader from "./header/TopHeader";
import PrimaryMenu from "./header/PrimaryMenu";
import MobileMenu from "./header/MobileMenu";

import logo from "../images/logo.jpg";

export default function Header() {
  const { collections } = useContext(AppState);
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
    </>
  );
}
