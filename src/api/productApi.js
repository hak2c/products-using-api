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

  getProductsInQuote = () => {
    let productsList = localStorage.getItem(REACT_APP_QUOTE_KEY);
    if (productsList === null || productsList === "") {
      localStorage.setItem(REACT_APP_QUOTE_KEY, "[]");
      productsList = "[]";
    }
    return JSON.parse(productsList);
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
