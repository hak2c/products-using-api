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
  setShowQuote,
  changeStatusAddedQuoteSuccess,
} = quoteSlice.actions;

export default quoteSlice.reducer;
