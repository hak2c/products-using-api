import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import axios from "axios";

import { checkProductsInCart, API_URL } from "./components/Utils";

import CollectionsPageContent from "./components/CollectionsPageContent";
import ProductPage from "./components/ProductPage";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";

import "./styles.css";
import "./css/styles.scss";

export const AppState = createContext();

export default function App() {
  const [collections, setCollections] = useState([]);
  const [productsInCart, setProductsInCart] = useState(checkProductsInCart());

  const [searchKey, setSearchkey] = useState("");
  const [submitSearch, setSubmitSearch] = useState(false);
  useEffect(() => {
    axios
      .get(API_URL + "collections")
      .then(function (response) {
        setCollections(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  useEffect(() => {
    setProductsInCart(checkProductsInCart());
  }, [productsInCart]);

  function handleSubmitSearchForm(e) {
    e.preventDefault();
    setSubmitSearch(true);
  }

  function handleChangeSearchInput(e) {
    e.preventDefault();
    setSearchkey(e.target.value);
  }
  return (
    <AppState.Provider
      value={{ collections, productsInCart, setProductsInCart }}
    >
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
    </AppState.Provider>
  );
}
