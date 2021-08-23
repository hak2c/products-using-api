import { memo } from "react";

import CollectionsListItem from "./collections/CollectionsListItem";
function CollectionsList({ collections }) {
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
