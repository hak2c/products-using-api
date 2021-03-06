import { configureStore } from "@reduxjs/toolkit";

import cartSlice from "../features/Cart/cartSlice";
import quoteSlice from "../features/Quote/quoteSlice";
import collectionsSlice from "../features/Collection/collectionsSlice";
import usersSlice from "../features/User/usersSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
    quote: quoteSlice,
    collections: collectionsSlice,
    users: usersSlice,
  },
});
