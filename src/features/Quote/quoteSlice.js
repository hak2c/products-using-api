import { createSlice } from "@reduxjs/toolkit";

import productApi from "../../api/productApi";

const initialState = {
  products: productApi.getProductsInQuote(),
  showQuote: false,
  addedQuoteSuccess: false,
  createQuoteSuccess: false,
};

const { REACT_APP_QUOTE_KEY } = process.env;

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    setProductsInQuote: (state, action) => {
      const products = action.payload;
      state.products = products;
      if (products.length > 0)
        localStorage.setItem(REACT_APP_QUOTE_KEY, JSON.stringify(products));
      else localStorage.setItem(REACT_APP_QUOTE_KEY, "[]");
    },
    changeQuoteItemQuantityWithButton: (state, action) => {
      const { index, isDown } = action.payload;
      let newProducts = [...state.products];
      if (index != -1) {
        newProducts[index].qty = !isDown
          ? newProducts[index].qty + 1
          : newProducts[index].qty - 1;
        newProducts[index].total = (
          newProducts[index].qty * newProducts[index].price
        ).toFixed(2);
        state.products = newProducts;
        localStorage.setItem(REACT_APP_QUOTE_KEY, JSON.stringify(newProducts));
      }
    },
    changeQuoteItemQuantityWithInput: (state, action) => {
      const { index, value } = action.payload;
      let newProducts = [...state.products];
      newProducts[index].qty = value;
      newProducts[index].total = (
        newProducts[index].qty * newProducts[index].price
      ).toFixed(2);
      state.products = newProducts;
      localStorage.setItem(REACT_APP_QUOTE_KEY, JSON.stringify(newProducts));
    },
    setShowQuote: (state, action) => {
      const status = action.payload;
      state.showQuote = status;
    },
    changeStatusAddedQuoteSuccess: (state, action) => {
      const status = action.payload;
      state.addedQuoteSuccess = status;
    },
    changeStatusCreateQuoteSuccess: (state, action) => {
      const status = action.payload;
      state.createQuoteSuccess = status;
    },
  },
});

export const {
  setProductsInQuote,
  changeQuoteItemQuantityWithButton,
  changeQuoteItemQuantityWithInput,
  setShowQuote,
  changeStatusAddedQuoteSuccess,
  changeStatusCreateQuoteSuccess,
} = quoteSlice.actions;

export default quoteSlice.reducer;
