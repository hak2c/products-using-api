import { useContext, memo, useState, createContext } from "react";

import { AppState } from "../App";
import { getTotalPrice, moneyFormat, getTax, CART_KEY } from "./Utils";

import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import CollectionsList from "./CollectionsList";
import CartContentHeader from "./cart/CartContentHeader";
import CartItems from "./cart/CartItems";
import CartFooter from "./cart/CartFooter";

export const CartState = createContext();

function CartPage() {
  const { collections, productsInCart, setProductsInCart } =
    useContext(AppState);
  const [subTotal, setSubTotal] = useState(getTotalPrice(productsInCart));
  const [tax, setTax] = useState(getTax(subTotal));

  function handleChangeQuantityButton(index, isDown = false) {
    let newProducts = [...productsInCart];
    if (index != -1) {
      newProducts[index].qty = !isDown
        ? newProducts[index].qty + 1
        : isDown && newProducts[index].qty > 1
        ? newProducts[index].qty - 1
        : newProducts[index].qty;
      newProducts[index].total = (
        newProducts[index].qty * newProducts[index].price
      ).toFixed(2);
      setProductsInCart(newProducts);
      calculateSubTotalAndTax(newProducts);
      localStorage.setItem(CART_KEY, JSON.stringify(newProducts));
    }
  }

  function handleChangeQuantityInput(index, e) {
    if (!isNaN(e.target.value)) {
      let newProducts = [...productsInCart];
      newProducts[index].qty = parseInt(e.target.value, 10);
      newProducts[index].total = (
        newProducts[index].qty * newProducts[index].price
      ).toFixed(2);
      setProductsInCart(newProducts);
      calculateSubTotalAndTax(newProducts);
      localStorage.setItem(CART_KEY, JSON.stringify(newProducts));
    }
  }

  function handleRemoveProduct(index) {
    let newProducts = [...productsInCart];
    newProducts.splice(index, 1);
    console.log(newProducts);
    setProductsInCart(newProducts);
    calculateSubTotalAndTax(newProducts);
    localStorage.setItem(CART_KEY, JSON.stringify(newProducts));
  }

  function calculateSubTotalAndTax(products) {
    let newSubTotal = getTotalPrice(products);
    setSubTotal(newSubTotal);
    setTax(getTax(newSubTotal));
  }
  return (
    <CartState.Provider
      value={{
        subTotal,
        setSubTotal,
        tax,
        setTax,
        handleChangeQuantityButton,
        handleChangeQuantityInput,
        handleRemoveProduct,
      }}
    >
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs location="Your Shopping Cart" />
          <div className="cart_content">
            <CartContentHeader />
            {productsInCart.length > 0 ? (
              <form id="cart-infor-form" method="post" name="cart-infor-form">
                <CartItems />
                <CartFooter />
              </form>
            ) : (
              <h2 className="d-block cart_empty text-center">
                Your cart is currently empty.
              </h2>
            )}
          </div>
        </div>
      </main>
      <CollectionsList collections={collections} />
      <footer>
        <Footer collections={collections} />
      </footer>
    </CartState.Provider>
  );
}

export default memo(CartPage);
