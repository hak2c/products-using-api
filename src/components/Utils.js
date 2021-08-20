import axios from "axios";

export const CART_KEY = "testament_cart";
export const STORAGE_KEY = "testament_quote";
export const API_URL = "https://fake-server-products-api.herokuapp.com/";
export const LIMIT_PER_PAGE = 3;

export const moneyFormat = (money) => {
  if (typeof money !== "undefined") {
    let parts = money.toString().split("."),
      dollars = parts[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,"),
      cents = parts[1] ? "." + parts[1] : "";
    return "$" + dollars + cents;
  }
  return "0";
};

export async function fetchData(url) {
  let response = await fetch(url);
  if (response.status === 200) {
    const data = await response.json();
    const total = response.headers.get("X-Total-Count");
    return { data, total };
  } else {
    return response.status + ":" + response.statusText;
  }
}

export function checkProductsInCart() {
  let prodCart = localStorage.getItem(CART_KEY);
  if (prodCart == null || prodCart == "") {
    localStorage.setItem(CART_KEY, "[]");
    prodCart = "[]";
  }
  return JSON.parse(prodCart);
}

export function checkProductsInQuote() {
  let productsList = localStorage.getItem(STORAGE_KEY);
  if (productsList == null || productsList == "") {
    localStorage.setItem(STORAGE_KEY, "[]");
    productsList = "[]";
  }
  return JSON.parse(productsList);
}

export function addProductToCart(addedProduct) {
  const productsInCart = JSON.parse(localStorage.getItem(CART_KEY));
  if (productsInCart.length == 0) {
    productsInCart.push(addedProduct);
  } else {
    let exist = false;
    for (let i = 0; i < productsInCart.length; i++) {
      if (
        productsInCart[i].id === addedProduct.id &&
        productsInCart[i].size === addedProduct.size &&
        productsInCart[i].color === addedProduct.color
      ) {
        exist = true;
        productsInCart[i].qty += addedProduct.qty;
        productsInCart[i].total = (
          productsInCart[i].qty * productsInCart[i].price
        ).toFixed(2);
      }
    }
    if (!exist) productsInCart.push(addedProduct);
  }
  localStorage.setItem(CART_KEY, JSON.stringify(productsInCart));
  return productsInCart;
}
