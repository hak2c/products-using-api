import { memo } from "react";
import { Route, useRouteMatch, Switch } from "react-router";

import MainPage from "./MainPage";
import SubCollectionPage from "./SubCollectionPage";

function AllCollectionsPage() {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={url} component={MainPage}></Route>
      <Route path={`${url}/:collectionId/:slug`}>
        <SubCollectionPage />
      </Route>
    </Switch>
  );
}

export default memo(AllCollectionsPage);
