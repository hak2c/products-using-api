import { createSlice } from "@reduxjs/toolkit";

import { getProductsInQuote, QUOTE_KEY } from "../../components/Utils";

const initialState = {
  products: getProductsInQuote(),
  showQuote: false,
  addedQuoteSuccess: false,
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    setProductsInQuote: (state, action) => {
      const products = action.payload;
      state.products = products;
      if (products.length > 0)
        localStorage.setItem(QUOTE_KEY, JSON.stringify(products));
      else localStorage.setItem(QUOTE_KEY, "[]");
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
        localStorage.setItem(QUOTE_KEY, JSON.stringify(newProducts));
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
      localStorage.setItem(QUOTE_KEY, JSON.stringify(newProducts));
    },
    setShowQuote: (state, action) => {
      const status = action.payload;
      state.showQuote = status;
    },
    changeStatusAddedQuoteSuccess: (state, action) => {
      const status = action.payload;
      state.addedQuoteSuccess = status;
    },
  },
});

export const {
  setProductsInQuote,
  changeQuoteItemQuantityWithButton,
  changeQuoteItemQuantityWithInput,
  setShowQuote,
  changeStatusAddedQuoteSuccess,
} = quoteSlice.actions;

export default quoteSlice.reducer;
