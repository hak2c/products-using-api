export const CART_KEY = "testament_cart";
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

export function getJson(options) {
  const { method, url } = options;
  let result = {};

  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open(method, url);
    xhr.send();
    xhr.onload = () => {
      if (xhr.status === 200) {
        result.products = xhr.response;
        result.headers = xhr
          .getAllResponseHeaders()
          .split("\r\n")
          .reduce((obj, item) => {
            let [key, value] = item.split(": ");
            obj[key] = value;
            return obj;
          }, {});
        resolve(result);
      } else {
        reject(xhr.status + ":" + xhr.statusText);
      }
    };
    xhr.onerror = () => reject("Something happen!");
  });
}

export function checkProductsInCart() {
  let prodCart = localStorage.getItem(CART_KEY);
  if (prodCart == null || prodCart == "") {
    localStorage.setItem(CART_KEY, "[]");
    prodCart = "[]";
  }
  prodCart = JSON.parse(prodCart);
  return prodCart;
}

export function addProductToCart(addedProduct) {
  let productsInCart = JSON.parse(localStorage.getItem(CART_KEY));
  if (productsInCart.length == 0) {
    productsInCart.push(addedProduct);
    localStorage.setItem(CART_KEY, JSON.stringify(productsInCart));
  } else {
    let exist = false;
    for (let i = 0; i < productsInCart.length; i++) {
      if (
        productsInCart[i].id == addedProduct.id &&
        productsInCart[i].size == addedProduct.size &&
        productsInCart[i].color == addedProduct.color
      ) {
        exist = true;
        productsInCart[i].qty += addedProduct.qty;
        productsInCart[i].total =
          productsInCart[i].qty * productsInCart[i].price;
      }
    }
    if (!exist) productsInCart.push(addedProduct);
    localStorage.setItem(CART_KEY, JSON.stringify(productsInCart));
  }
}
