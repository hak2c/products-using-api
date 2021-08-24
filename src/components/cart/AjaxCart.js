import { BrowserRouter as Router, Link } from "react-router-dom";
import { memo, useContext } from "react";
import { AppState } from "../../App";
import { HeaderState } from "../Header";

import CartItems from "./CartItems";
import CartFooter from "./CartFooter";

function AjaxCart() {
  const { productsInCart } = useContext(AppState);
  const { showAjaxCart, setShowAjaxCart } = useContext(HeaderState);
  const animateClass = showAjaxCart
    ? " animate__fadeInRight"
    : " animate__fadeOutRight";
  return (
    <aside className="animate__animated ajax__cart">
      <div className="ajax__cart--overlay"></div>
      <div className={"animate__animated ajax__cart--content" + animateClass}>
        <div className="ajax__cart--header d-flex justify-content-between align-items-center">
          <div className="ajax__cart--header-close">
            <div
              className="icon-close"
              onClick={() => {
                document.body.classList.toggle("stopScrolling");
                setShowAjaxCart(false);
              }}
            ></div>
          </div>
          <div className="text-center">
            <h2>Cart</h2>
          </div>
          <div className="text-end">
            <p>{productsInCart.length} item(s)</p>
          </div>
        </div>
        <div className="ajax__cart--content-inner">
          <form className="ajax__cart--form">
            <div className="ajax__cart--items">
              <CartItems />
            </div>
            <CartFooter />
            <div className="ajax__cart--buttons">
              <Link
                className="ajax__cart--view-cart button secondary-button"
                onClick={() => document.body.classList.toggle("stopScrolling")}
                to="/cart"
              >
                View Cart
              </Link>
            </div>
          </form>
        </div>
      </div>
    </aside>
  );
}

export default memo(AjaxCart);
