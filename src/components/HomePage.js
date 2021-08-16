import { useEffect, useRef, useState } from "react";
import axios from "axios";

import Header from "./Header";
import Footer from "./Footer";
import MainBanner from "./home/MainBanner";
import ListCollections from "./home/ListCollections";
import ContentBanner from "./home/ContentBanner";
import ExploreCollections from "./home/ExploreCollections";
import SubcribeEmail from "./home/SubcribeEmail";

const API_URL = "https://fake-server-products-api.herokuapp.com/";

export default function HomePage() {
  const [collections, setCollections] = useState([]);

  const [searchKey, setSearchkey] = useState("");
  const [submitSearch, setSubmitSearch] = useState(false);
  const [submitProductSearch, setSubmitProductSearch] = useState(false);

  useEffect(() => {
    axios
      .get(API_URL + "collections")
      .then(function (response) {
        setCollections(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  function handleSubmitSearchForm(e) {
    e.preventDefault();
    setSubmitSearch(true);
  }

  function handleChangeSearchInput(e) {
    e.preventDefault();
    setSearchkey(e.target.value);
  }

  return (
    <>
      <Header
        collections={collections}
        searchKey={searchKey}
        handleChangeSearchInput={handleChangeSearchInput}
        handleSubmitSearchForm={handleSubmitSearchForm}
      />
      <main>
        <MainBanner />
        <ListCollections collections={collections} />
        <ContentBanner />
        <ExploreCollections />
        <SubcribeEmail />
      </main>
      <footer>
        <Footer collections={collections} />
      </footer>
    </>
  );
}
