import TopHeader from "./header/TopHeader";
import PrimaryMenu from "./header/PrimaryMenu";
import MobileMenu from "./header/MobileMenu";

import logo from "../images/logo.jpg";

export default function Header({
  collections,
  searchKey,
  setSearchkey,
  setSubmitSearch,
}) {
  return (
    <>
      <TopHeader
        searchKey={searchKey}
        setSearchkey={setSearchkey}
        setSubmitSearch={setSubmitSearch}
      />
      <div className="logo d-none d-lg-block text-center">
        <a href="index.html">
          <img src={logo} alt="" />
        </a>
      </div>
      <MobileMenu collections={collections} />
      <PrimaryMenu collections={collections} />
    </>
  );
}
