import { useContext, memo, useState, createContext } from "react";

import { AppState } from "../App";
import { getTotalPrice, getTax, CART_KEY } from "./Utils";

import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import CollectionsList from "./CollectionsList";
import CartContentHeader from "./cart/CartContentHeader";
import CartItems from "./cart/CartItems";
import CartFooter from "./cart/CartFooter";

function CartPage() {
  const { collections, productsInCart } = useContext(AppState);

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs location="Your Shopping Cart" />
          <div className="cart__content">
            <CartContentHeader />
            {productsInCart.length > 0 ? (
              <form id="cart-infor-form" method="post" name="cart-infor-form">
                <CartItems />
                <CartFooter />
              </form>
            ) : (
              <h2 className="d-block cart--empty text-center">
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
    </>
  );
}

export default memo(CartPage);
