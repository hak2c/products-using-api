import { memo } from "react";
import { useSelector } from "react-redux";

import CollectionsListItem from "../../../components/CollectionsListItem";

function ListCollections() {
  const { collections } = useSelector((state) => state.collections);
  return (
    <section className="top-collections">
      <div className="container">
        <div className="row">
          {collections
            .filter((e, index) => index < 3)
            .map((collection) => (
              <CollectionsListItem
                key={collection.id}
                collection={collection}
              />
            ))}
        </div>
      </div>
    </section>
  );
}
export default memo(ListCollections);
