import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Unicons from "@iconscout/react-unicons";

import { setShowQuote } from "./features/quote/quoteSlice";
import { fetchAllCollections } from "./features/collections/collectionsSlice";
import { checkLoggegUser } from "./features/users/usersSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

import CollectionsPage from "./components/collections/CollectionsPage";
import ProductPage from "./components/products/ProductPage";
import HomePage from "./components/home/HomePage";
import SearchPage from "./components/SearchPage";
import QuotePopup from "./components/quote/QuotePopup";
import CartPage from "./components/cart/CartPage";
import CheckoutPage from "./components/checkout/CheckoutPage";
import AddedQuoteSuccess from "./components/quote/AddedQuoteSuccess";
import CreateQuoteSuccessMessage from "./components/quote/CreateQuoteSuccessMessage";
import LoginForm from "./components/login/LoginForm";

import "./styles.css";
import "./css/styles.scss";

export const AppState = createContext();

export default function App() {
  const dispatch = useDispatch();
  const {
    products: productsInQuote,
    showQuote,
    addedQuoteSuccess,
    createQuoteSuccess,
  } = useSelector((state) => state.quote);
  const { user, showLoginForm } = useSelector((state) => state.users);

  const [searchKey, setSearchkey] = useState("");
  const [submitSearch, setSubmitSearch] = useState(false);

  useEffect(() => {
    dispatch(fetchAllCollections());
  }, []);

  useEffect(() => {
    if (user !== null) {
      dispatch(checkLoggegUser(user.token));
    }
  }, [user]);

  function handleSubmitSearchForm(e) {
    e.preventDefault();
    setSubmitSearch(true);
  }

  function handleChangeSearchInput(e) {
    e.preventDefault();
    setSearchkey(e.target.value);
  }
  return (
    <AppState.Provider value={{}}>
      <Router>
        <Header />
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
        <footer>
          <Footer />
        </footer>
        {productsInQuote.length > 0 && (
          <div className="action-button">
            <a
              className="view_quote"
              title="View quote"
              onClick={() => {
                document.body.classList.toggle("stopScrolling");
                dispatch(setShowQuote(true));
              }}
            >
              <Unicons.UilReceiptAlt size="45" color="#b79e8c" />
            </a>
          </div>
        )}
        {showQuote && <QuotePopup />}
        {addedQuoteSuccess && <AddedQuoteSuccess />}
        {createQuoteSuccess && <CreateQuoteSuccessMessage />}
        {showLoginForm && <LoginForm />}
      </Router>
    </AppState.Provider>
  );
}
