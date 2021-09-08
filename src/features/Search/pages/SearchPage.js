import { memo } from "react";
import { useParams } from "react-router-dom";

import Breadcrumbs from "../../../components/Breadcrumbs";
import CollectionsList from "../../../components/CollectionsList";

function SearchPage() {
  let { key } = useParams();
  console.log(useParams());
  return (
    <>
      <main>
        <div className="container">
          <Breadcrumbs location="Search Results" />
          <div className="cart__content"></div>
        </div>
      </main>
      <CollectionsList />
    </>
  );
}

export default memo(SearchPage);
