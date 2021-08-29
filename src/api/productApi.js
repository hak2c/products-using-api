import axiosClient from "./axiosClient";

const { REACT_APP_CART_KEY, REACT_APP_QUOTE_KEY } = process.env;

class ProductApi {
  getProducts = (params) => {
    const url = "products";
    return axiosClient.get(url, { params });
  };

  getProductsInCart = () => {
    let prodCart = localStorage.getItem(REACT_APP_CART_KEY);
    if (prodCart === null || prodCart === "") {
      localStorage.setItem(REACT_APP_CART_KEY, "[]");
      prodCart = "[]";
    }
    return JSON.parse(prodCart);
  };

  addProductToCart = (addedProduct) => {
    const productsInCart = this.getProductsInCart();
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
  };

  getProductsInQuote = () => {
    let productsList = localStorage.getItem(REACT_APP_QUOTE_KEY);
    if (productsList === null || productsList === "") {
      localStorage.setItem(REACT_APP_QUOTE_KEY, "[]");
      productsList = "[]";
    }
    return JSON.parse(productsList);
  };

  addProductToQuote = (addedProduct) => {
    const productsInQuote = this.getProductsInQuote();
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
  };

  getTotalPrice = () => {
    const products = this.getProductsInCart();
    return Number(
      products.reduce((sum, item) => sum + Number(item.total), 0).toFixed(2)
    );
  };
  getTax = () => {
    const total = this.getTotalPrice();
    return Number((total * 0.1).toFixed(2));
  };
  moneyFormat = (money) => {
    if (typeof money !== "undefined") {
      let parts = money.toString().split("."),
        dollars = parts[0].replace(/(\d)(?=(\d{3})+$)/g, "$1,"),
        cents = parts[1] ? "." + parts[1] : "";
      return "$" + dollars + cents;
    }
    return "0";
  };
}

const productApi = new ProductApi();
export default productApi;
