import { memo } from "react";
import CollectionsListItem from "../collections/CollectionsListItem";

function ListCollections({ collections }) {
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
