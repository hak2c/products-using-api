import { useContext, memo } from "react";
import { useSelector } from "react-redux";

import { AppState } from "../../../App";

import Breadcrumbs from "../../../components/Breadcrumbs";
import CollectionsList from "../../../components/CollectionsList";
import CartContentHeader from "../components/CartContentHeader";
import CartItems from "../components/CartItems";
import CartFooter from "../components/CartFooter";

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
      <CollectionsList />
    </>
  );
}

export default memo(CartPage);
