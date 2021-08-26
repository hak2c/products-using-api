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
  addedCartSuccess: false,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setProductsInCart: (state, action) => {
      const products = action.payload;
      if (products.length > 0)
        localStorage.setItem(CART_KEY, JSON.stringify(products));
      else localStorage.setItem(CART_KEY, "[]");

      state.products = products;
      state.subTotal = getTotalPrice(state.products);
      state.tax = getTax(state.subTotal);
    },
    changeItemCartQuantityWithButton: (state, action) => {
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
        state.subTotal = getTotalPrice(newProducts);
        state.tax = getTax(state.subTotal);
        localStorage.setItem(CART_KEY, JSON.stringify(newProducts));
      }
    },
    changeItemCartQuantityWithInput: (state, action) => {
      const { index, value } = action.payload;
      let newProducts = [...state.products];
      newProducts[index].qty = value;
      newProducts[index].total = (
        newProducts[index].qty * newProducts[index].price
      ).toFixed(2);
      state.products = newProducts;
      state.subTotal = getTotalPrice(newProducts);
      state.tax = getTax(state.subTotal);
      localStorage.setItem(CART_KEY, JSON.stringify(newProducts));
    },
    calculateSubTotalAndTax: (state) => {
      state.subTotal = getTotalPrice(state.products);
      state.tax = getTax(state.subTotal);
    },
    setShowAjaxCart: (state, action) => {
      const status = action.payload;
      state.showAjaxCart = status;
    },
    changeStatusAddedCartSuccess: (state, action) => {
      const status = action.payload;
      state.addedCartSuccess = status;
    },
  },
});

export const {
  setProductsInCart,
  changeItemCartQuantityWithButton,
  changeItemCartQuantityWithInput,
  calculateSubTotalAndTax,
  setShowAjaxCart,
  changeStatusAddedCartSuccess,
} = cartSlice.actions;

export default cartSlice.reducer;
