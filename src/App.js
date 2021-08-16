import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CollectionsPageContent from "./components/CollectionsPageContent";
import ProductPage from "./components/ProductPage";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";

import "./styles.css";
import "./css/styles.scss";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/product/:slug" children={<ProductPage />} />
        <Route
          path="/collection/:collectionId/:slug"
          children={<CollectionsPageContent />}
        />
      </Switch>
    </Router>
  );
}
