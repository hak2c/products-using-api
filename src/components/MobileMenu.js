import { useState, memo } from "react";
import * as Unicons from "@iconscout/react-unicons";
import { useSelector, useDispatch } from "react-redux";

import { setShowAjaxCart } from "../features/Cart/cartSlice";
import SlideMobileMenu from "./SlideMobileMenu";

import logo from "../assets/images/logo.jpg";

function MobileMenu() {
  const dispatch = useDispatch();
  const { products: productsInCart } = useSelector((state) => state.cart);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <div className="d-block d-lg-none mobile-logo">
        <div className="d-flex align-items-center h-100">
          <div className="col-2 text-center">
            <a className="text-center mobile-icon">
              <Unicons.UilBars
                onClick={() => {
                  document.body.classList.toggle("stopScrolling");
                  setShowMenu(true);
                }}
                size="24"
                color="#b79e8c"
                style={{ cursor: "pointer" }}
              />
            </a>
          </div>
          <div className="col-8 text-center">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="col-2">
            <span
              className="cart"
              onClick={
                productsInCart.length > 0
                  ? () => {
                      document.body.classList.toggle("stopScrolling");
                      dispatch(setShowAjaxCart(true));
                    }
                  : undefined
              }
            >
              <Unicons.UilShoppingCart
                className="me-1"
                size="16"
                color="#b79e8c"
                style={{ cursor: "pointer" }}
              />
              <span className="cart-count">{productsInCart.length}</span>
            </span>
          </div>
        </div>
      </div>
      {showMenu && (
        <SlideMobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      )}
    </>
  );
}

export default memo(MobileMenu);
