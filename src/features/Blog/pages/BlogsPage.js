import { memo } from "react";
import { Route, useRouteMatch, Switch } from "react-router";

import MainPage from "./MainPage";
import SinglePostPage from "./SinglePostPage";

function BlogsPage() {
  const { url } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={url} component={MainPage}></Route>
      <Route path={`${url}/:blogId/:slug`}>
        <SinglePostPage />
      </Route>
    </Switch>
  );
}

export default memo(BlogsPage);
