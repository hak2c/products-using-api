import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createContext, useState, useEffect } from "react";
import * as Unicons from "@iconscout/react-unicons";

import {
  getProductsInCart,
  getProductsInQuote,
  API_URL,
  fetchData,
  getTotalPrice,
  getTax,
  CART_KEY,
} from "./components/Utils";

import CollectionsPage from "./components/CollectionsPage";
import ProductPage from "./components/ProductPage";
import HomePage from "./components/HomePage";
import SearchPage from "./components/SearchPage";
import QuotePopup from "./components/quote/QuotePopup";
import CartPage from "./components/CartPage";

import "./styles.css";
import "./css/styles.scss";

export const AppState = createContext();

export default function App() {
  const [collections, setCollections] = useState([]);
  const [productsInCart, setProductsInCart] = useState(getProductsInCart());
  const [productsInQuote, setProductsInQuote] = useState(getProductsInQuote());
  const [showQuote, setShowQuote] = useState(false);

  const [subTotal, setSubTotal] = useState(getTotalPrice(productsInCart));
  const [tax, setTax] = useState(getTax(subTotal));

  const [searchKey, setSearchkey] = useState("");
  const [submitSearch, setSubmitSearch] = useState(false);
  useEffect(() => {
    fetchData(API_URL + "collections").then((res) => {
      const { data } = res;
      setCollections(data);
    });
  }, []);

  function handleChangeQuantityButton(index, isDown = false) {
    let newProducts = [...productsInCart];
    if (index != -1) {
      newProducts[index].qty = !isDown
        ? newProducts[index].qty + 1
        : isDown && newProducts[index].qty > 1
        ? newProducts[index].qty - 1
        : newProducts[index].qty;
      newProducts[index].total = (
        newProducts[index].qty * newProducts[index].price
      ).toFixed(2);
      setProductsInCart(newProducts);
      calculateSubTotalAndTax(newProducts);
      localStorage.setItem(CART_KEY, JSON.stringify(newProducts));
    }
  }

  function handleChangeQuantityInput(index, e) {
    if (!isNaN(e.target.value)) {
      let newProducts = [...productsInCart];
      newProducts[index].qty = parseInt(e.target.value, 10);
      newProducts[index].total = (
        newProducts[index].qty * newProducts[index].price
      ).toFixed(2);
      setProductsInCart(newProducts);
      calculateSubTotalAndTax(newProducts);
      localStorage.setItem(CART_KEY, JSON.stringify(newProducts));
    }
  }

  function handleRemoveProduct(index) {
    let newProducts = [...productsInCart];
    newProducts.splice(index, 1);
    setProductsInCart(newProducts);
    calculateSubTotalAndTax(newProducts);
    localStorage.setItem(CART_KEY, JSON.stringify(newProducts));
  }

  function calculateSubTotalAndTax(products) {
    let newSubTotal = getTotalPrice(products);
    setSubTotal(newSubTotal);
    setTax(getTax(newSubTotal));
  }

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
      value={{
        collections,
        productsInCart,
        productsInQuote,
        setProductsInCart,
        setShowQuote,
        subTotal,
        setSubTotal,
        tax,
        setTax,
        handleChangeQuantityButton,
        handleChangeQuantityInput,
        handleRemoveProduct,
      }}
    >
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
              onClick={() => setShowQuote(true)}
            >
              <Unicons.UilReceiptAlt size="45" color="#b79e8c" />
            </a>
          </div>
        )}
        {showQuote && <QuotePopup />}
      </Router>
    </AppState.Provider>
  );
}
