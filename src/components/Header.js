import TopHeader from "./header/TopHeader";
import MobileLogo from "./header/MobileLogo";
import PrimaryMenu from "./header/PrimaryMenu";
import SlideMobileMenu from "./header/SlideMobileMenu";

import logo from "../images/logo.jpg";

export default function Header({ collections }) {
  return (
    <>
      <TopHeader />
      <div className="logo d-none d-lg-block text-center">
        <a href="index.html">
          <img src={logo} alt="" />
        </a>
      </div>
      <MobileLogo />
      <PrimaryMenu collections={collections} />
      <SlideMobileMenu collections={collections} />
    </>
  );
}
