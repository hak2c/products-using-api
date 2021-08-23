import { useContext, memo } from "react";
import { AppState } from "../App";

import Header from "./Header";
import Footer from "./Footer";
import MainBanner from "./home/MainBanner";
import ListCollections from "./home/ListCollections";
import NewestArrivals from "./home/NewestArrivals";
import ContentBanner from "./home/ContentBanner";
import ExploreCollections from "./home/ExploreCollections";
import SubcribeEmail from "./home/SubcribeEmail";

function HomePage() {
  const { collections } = useContext(AppState);
  return (
    <>
      <Header />
      <main>
        <MainBanner />
        <ListCollections collections={collections} />
        <NewestArrivals />
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
export default memo(HomePage);
