import { createSlice } from "@reduxjs/toolkit";
import {
  getProductsInCart,
  getTotalPrice,
  getTax,
  CART_KEY,
} from "../../components/Utils";

const initialState = {
  products: getProductsInCart(),
  subTotal: getTotalPrice(getProductsInCart()),
  tax: getTax(getTotalPrice(getProductsInCart())),
  showAjaxCart: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      const products = action.payload;
      state.products = products;
    },
    changeQuantity: (state, action) => {
      const { index, isDown } = action.payload;
      let newProducts = [...state.products];
      if (index != -1) {
        newProducts[index].qty = !isDown
          ? newProducts[index].qty + 1
          : isDown && newProducts[index].qty > 1
          ? newProducts[index].qty - 1
          : newProducts[index].qty;
        newProducts[index].total = (
          newProducts[index].qty * newProducts[index].price
        ).toFixed(2);
        state.products = newProducts;
        state.subTotal = getTotalPrice(newProducts);
        state.tax = getTax(state.subTotal);
        localStorage.setItem(CART_KEY, JSON.stringify(newProducts));
      }
    },
    calculateSubTotalAndTax: (state) => {
      state.subTotal = getTotalPrice(state.products);
      state.tax = getTax(state.subTotal);
    },
    setShowAjaxCart: (state, action) => {
      const status = action.payload;
      state.showAjaxCart = status;
    },
  },
});

export const {
  setProducts,
  changeQuantity,
  calculateSubTotalAndTax,
  setShowAjaxCart,
} = cartSlice.actions;

export default cartSlice.reducer;
