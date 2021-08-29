import { createSlice } from "@reduxjs/toolkit";

import productApi from "../../api/productApi";

const { REACT_APP_CART_KEY } = process.env;

const initialState = {
  products: productApi.getProductsInCart(),
  subTotal: productApi.getTotalPrice(productApi.getProductsInCart()),
  tax: productApi.getTax(
    productApi.getTotalPrice(productApi.getProductsInCart())
  ),
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
        localStorage.setItem(REACT_APP_CART_KEY, JSON.stringify(products));
      else localStorage.setItem(REACT_APP_CART_KEY, "[]");

      state.products = products;
      state.subTotal = productApi.getTotalPrice(state.products);
      state.tax = productApi.getTax(state.subTotal);
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
        state.tax = productApi.getTax(state.subTotal);
        localStorage.setItem(REACT_APP_CART_KEY, JSON.stringify(newProducts));
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
      state.subTotal = productApi.getTotalPrice(newProducts);
      state.tax = productApi.getTax(state.subTotal);
      localStorage.setItem(REACT_APP_CART_KEY, JSON.stringify(newProducts));
    },
    calculateSubTotalAndTax: (state) => {
      state.subTotal = productApi.getTotalPrice(state.products);
      state.tax = productApi.getTax(state.subTotal);
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
