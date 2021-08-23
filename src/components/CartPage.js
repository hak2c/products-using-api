import { useContext, memo, useState, createContext } from "react";

import { AppState } from "../App";
import { getTotalPrice, moneyFormat, getTax } from "./Utils";

import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import CollectionsList from "./CollectionsList";
import CartContentHeader from "./cart/CartContentHeader";
import CartFooter from "./cart/CartFooter";

export const CartState = createContext();

function CartPage() {
  const { collections, productsInCart } = useContext(AppState);
  const [subTotal, setSubTotal] = useState(getTotalPrice(productsInCart));
  const [tax, setTax] = useState(getTax(subTotal));
  return (
    <CartState.Provider value={{ subTotal, setSubTotal, tax, setTax }}>
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs location="Your Shopping Cart" />
          <div className="cart_content">
            <CartContentHeader />
            {productsInCart.length > 0 ? (
              <form id="cart-infor-form" method="post" name="cart-infor-form">
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
