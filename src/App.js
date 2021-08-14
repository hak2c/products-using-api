import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import CollectionsPageContent from "./components/CollectionsPageContent";
import ProductPage from "./components/ProductPage";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";

import "./styles.css";
import "./css/styles.scss";

const API_URL = "https://fake-server-products-api.herokuapp.com/";

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
        <Route path="/product/:productId" children={<ProductPage />} />
        <Route
          path="/collection/:collectionId"
          children={<CollectionsPageContent />}
        />
      </Switch>
    </Router>
  );
}
