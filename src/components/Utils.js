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
