import { useContext, memo } from "react";
import { useSelector } from "react-redux";

import { AppState } from "../../App";

import Breadcrumbs from "../Breadcrumbs";
import CollectionsList from "../collections/CollectionsList";
import CartContentHeader from "./CartContentHeader";
import CartItems from "./CartItems";
import CartFooter from "./CartFooter";

function CartPage() {
  const products = useSelector((state) => state.cart.products);
  const { collections } = useContext(AppState);

  return (
    <>
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
    </>
  );
}

export default memo(CartPage);
