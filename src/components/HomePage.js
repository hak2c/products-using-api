import { memo } from "react";

import Header from "./Header";
import Footer from "./Footer";
import MainBanner from "./home/MainBanner";
import ListCollections from "./home/ListCollections";
import NewestArrivals from "./home/NewestArrivals";
import ContentBanner from "./home/ContentBanner";
import ExploreCollections from "./home/ExploreCollections";
import SubcribeEmail from "./home/SubcribeEmail";

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <MainBanner />
        <ListCollections />
        <NewestArrivals />
        <ContentBanner />
        <ExploreCollections />
        <SubcribeEmail />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default memo(HomePage);
