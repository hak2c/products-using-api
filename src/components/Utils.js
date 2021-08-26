export const CART_KEY = "testament_cart";
export const QUOTE_KEY = "testament_quote";
export const API_URL = "https://fake-server-products-api.herokuapp.com/";
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

// export async function fetchPostData(url, data) {
//   const requestOptions = {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify(data),
//   };

// }

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
        productsInCart[i].total = (
          productsInCart[i].qty * productsInCart[i].price
        ).toFixed(2);
        break;
      }
    }
    if (!exist) productsInCart.push(addedProduct);
  }
  return productsInCart;
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
