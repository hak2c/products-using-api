import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "../features/cart/cartSlice";
import quoteSlice from "../features/quote/quoteSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    quote: quoteSlice,
  },
});
