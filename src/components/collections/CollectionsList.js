import { memo } from "react";
import { useSelector } from "react-redux";

import CollectionsListItem from "./CollectionsListItem";
function CollectionsList() {
  const { collections } = useSelector((state) => state.collections);
  return (
    <section className="list-collections">
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
export default memo(CollectionsList);
