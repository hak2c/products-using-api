import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cartSlice";
import quoteSlice from "../features/quote/quoteSlice";
import collectionsSlice from "../features/collections/collectionsSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    quote: quoteSlice,
    collections: collectionsSlice,
  },
});
