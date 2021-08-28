import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "../features/cart/cartSlice";
import quoteSlice from "../features/quote/quoteSlice";
import collectionsSlice from "../features/collections/collectionsSlice";
import usersSlice from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    quote: quoteSlice,
    collections: collectionsSlice,
    users: usersSlice,
  },
});
