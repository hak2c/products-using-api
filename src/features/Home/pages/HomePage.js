import { memo } from "react";

import MainBanner from "../components/MainBanner";
import ListCollections from "../components/ListCollections";
import NewestArrivals from "../components/NewestArrivals";
import ContentBanner from "../components/ContentBanner";
import ExploreCollections from "../components/ExploreCollections";
import SubcribeEmail from "../components/SubcribeEmail";

function HomePage() {
  return (
    <main>
      <MainBanner />
      <ListCollections />
      <NewestArrivals />
      <ContentBanner />
      <ExploreCollections />
      <SubcribeEmail />
    </main>
  );
}
export default memo(HomePage);
