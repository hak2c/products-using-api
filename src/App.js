import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Unicons from "@iconscout/react-unicons";

import { API_URL, fetchData } from "./components/Utils";
import { setShowQuote } from "./features/quote/quoteSlice";

import CollectionsPage from "./components/CollectionsPage";
import ProductPage from "./components/ProductPage";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import QuotePopup from "./components/quote/QuotePopup";
import CartPage from "./components/CartPage";
import CheckoutPage from "./components/checkout/CheckoutPage";
import AddedQuoteSuccess from "./components/quote/AddedQuoteSuccess";

import "./styles.css";
import "./css/styles.scss";

export const AppState = createContext();

export default function App() {
  const dispatch = useDispatch();
  const [collections, setCollections] = useState([]);
  const {
    products: productsInQuote,
    showQuote,
    addedQuoteSuccess,
  } = useSelector((state) => state.quote);

  const [searchKey, setSearchkey] = useState("");
  const [submitSearch, setSubmitSearch] = useState(false);
  useEffect(() => {
    fetchData(API_URL + "collections").then((res) => {
      const { data } = res;
      setCollections(data);
    });
  }, []);

  function handleSubmitSearchForm(e) {
    e.preventDefault();
    setSubmitSearch(true);
  }

  function handleChangeSearchInput(e) {
    e.preventDefault();
    setSearchkey(e.target.value);
  }
  return (
    <AppState.Provider value={{ collections }}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/cart">
            <CartPage />
          </Route>
          <Route path="/checkout">
            <CheckoutPage />
          </Route>
          <Route path="/product/:slug" children={<ProductPage />} />
          <Route
            path="/collection/:collectionId/:slug"
            children={<CollectionsPage />}
          />
        </Switch>
        {productsInQuote.length > 0 && (
          <div className="action-button">
            <a
              className="view_quote"
              title="View quote"
              onClick={() => dispatch(setShowQuote(true))}
            >
              <Unicons.UilReceiptAlt size="45" color="#b79e8c" />
            </a>
          </div>
        )}
        {showQuote && <QuotePopup />}
        {addedQuoteSuccess && <AddedQuoteSuccess />}
      </Router>
    </AppState.Provider>
  );
}
