import TopHeader from "./header/TopHeader";
import PrimaryMenu from "./header/PrimaryMenu";
import MobileMenu from "./header/MobileMenu";

import logo from "../images/logo.jpg";

export default function Header({
  collections,
  searchKey,
  handleChangeSearchInput,
  handleSubmitSearchForm,
}) {
  return (
    <>
      <TopHeader
        searchKey={searchKey}
        handleChangeSearchInput={handleChangeSearchInput}
        handleSubmitSearchForm={handleSubmitSearchForm}
      />
      <div className="logo d-none d-lg-block text-center">
        <a href="/">
          <img src={logo} alt="" />
        </a>
      </div>
      <MobileMenu
        collections={collections}
        searchKey={searchKey}
        handleChangeSearchInput={handleChangeSearchInput}
        handleSubmitSearchForm={handleSubmitSearchForm}
      />
      <PrimaryMenu collections={collections} />
    </>
  );
}
