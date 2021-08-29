import { memo } from "react";

import MainBanner from "./MainBanner";
import ListCollections from "./ListCollections";
import NewestArrivals from "./NewestArrivals";
import ContentBanner from "./ContentBanner";
import ExploreCollections from "./ExploreCollections";
import SubcribeEmail from "./SubcribeEmail";

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
