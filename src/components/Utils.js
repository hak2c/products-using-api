export const CART_KEY = "testament_cart";
export const QUOTE_KEY = "testament_quote";
export const LOGGED_KEY = "testament_login";
export const API_URL = "https://fake-server-products-api.herokuapp.com/";
export const USER_API = "https://fake-rest-api-nodejs.herokuapp.com/";
export const LIMIT_PER_PAGE = 3;

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

export function getProductsInCart() {
  let prodCart = localStorage.getItem(CART_KEY);
  if (prodCart === null || prodCart === "") {
    localStorage.setItem(CART_KEY, "[]");
    prodCart = "[]";
  }
  return JSON.parse(prodCart);
}

export function getProductsInQuote() {
  let productsList = localStorage.getItem(QUOTE_KEY);
  if (productsList === null || productsList === "") {
    localStorage.setItem(QUOTE_KEY, "[]");
    productsList = "[]";
  }
  return JSON.parse(productsList);
}

export function getLoggedUser() {
  let user = localStorage.getItem(LOGGED_KEY);
  if (user === null || user === "") {
    return null;
  } else {
    return JSON.parse(user);
  }
}

export function addProductToCart(addedProduct) {
  const productsInCart = getProductsInCart();
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
        productsInCart[i].total = Number(
          (productsInCart[i].qty * productsInCart[i].price).toFixed(2)
        );
        break;
      }
    }
    if (!exist) productsInCart.push(addedProduct);
  }
  return productsInCart;
}

export function addProductToQuote(addedProduct) {
  const productsInQuote = getProductsInQuote();
  if (productsInQuote.length == 0) {
    productsInQuote.push(addedProduct);
  } else {
    let exist = false;
    for (let i = 0; i < productsInQuote.length; i++) {
      if (
        productsInQuote[i].id === addedProduct.id &&
        productsInQuote[i].size === addedProduct.size &&
        productsInQuote[i].color === addedProduct.color
      ) {
        exist = true;
        productsInQuote[i].qty += addedProduct.qty;
        productsInQuote[i].total = Number(
          (productsInQuote[i].qty * productsInQuote[i].price).toFixed(2)
        );
        break;
      }
    }
    if (!exist) productsInQuote.push(addedProduct);
  }
  return productsInQuote;
}

export function getTotalPrice(products) {
  let total = 0;
  products.forEach((item) => (total += Number(item.total)));
  return Number(total.toFixed(2));
}

export function getTax(total) {
  return Number((total * 0.1).toFixed(2));
}

export const moneyFormat = (money) => {
  if (typeof money !== "undefined") {
    let parts = money.toString().split("."),
      dollars = parts[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,"),
      cents = parts[1] ? "." + parts[1] : "";
    return "$" + dollars + cents;
  }
  return "0";
};
