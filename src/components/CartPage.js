import { useContext, memo } from "react";
import { useSelector } from "react-redux";

import { AppState } from "../App";

import Header from "./Header";
import Breadcrumbs from "./Breadcrumbs";
import Footer from "./Footer";
import CollectionsList from "./CollectionsList";
import CartContentHeader from "./cart/CartContentHeader";
import CartItems from "./cart/CartItems";
import CartFooter from "./cart/CartFooter";

function CartPage() {
  const products = useSelector((state) => state.cart.products);
  const { collections } = useContext(AppState);

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <Breadcrumbs location="Your Shopping Cart" />
          <div className="cart__content">
            <CartContentHeader />
            {products.length > 0 ? (
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
