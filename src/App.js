import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Unicons from "@iconscout/react-unicons";

import { setShowQuote } from "./features/Quote/quoteSlice";
import { fetchAllCollections } from "./features/Collection/collectionsSlice";
import { checkLogged } from "./features/User/usersSlice";

import Header from "./components/Header";
import Footer from "./components/Footer";

import AllCollectionsPage from "./features/Collection/pages/AllCollectionsPage";
import CollectionsPage from "./features/Collection/pages/SubCollectionPage";
import ProductPage from "./features/Product/pages/ProductPage";
import HomePage from "./features/Home/pages/HomePage";
import SearchPage from "./components/SearchPage";
import QuotePopup from "./features/Quote/components/QuotePopup";
import CartPage from "./features/Cart/pages/CartPage";
import CheckoutPage from "./components/checkout/CheckoutPage";
import AddedQuoteSuccess from "./features/Quote/components/AddedQuoteSuccess";
import CreateQuoteSuccessMessage from "./features/Quote/components/CreateQuoteSuccessMessage";
import LoginForm from "./features/User/components/LoginForm";

import "./styles.css";
import "./assets/css/styles.scss";

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
      dispatch(checkLogged(user.token));
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
      <BrowserRouter>
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
          <Route path="/collections">
            <AllCollectionsPage />
          </Route>
          <Route path="/product/:slug" children={<ProductPage />} />
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
      </BrowserRouter>
    </AppState.Provider>
  );
}
