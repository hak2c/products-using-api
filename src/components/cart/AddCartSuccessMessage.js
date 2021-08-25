import * as Unicons from "@iconscout/react-unicons";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { memo } from "react";
import { useDispatch } from "react-redux";

import { changeStatusAddedCartSuccess } from "../../features/cart/cartSlice";

function AddCartSuccessMessage() {
  const dispatch = useDispatch();
  return (
    <div className="added__cart">
      <div className="added__cart--overlay"></div>
      <div className="added__cart--popup">
        <span
          className="added__cart--popup-close"
          onClick={() => {
            document.body.classList.toggle("stopScrolling");
            dispatch(changeStatusAddedCartSuccess(false));
          }}
        >
          <Unicons.UilTimes size="20" color="#000000" />
        </span>
        <div className="added__cart--content">
          <div className="added__cart--message">
            Add product to cart successfully!
          </div>
          <div className="added__cart--action-button d-flex justify-content-center">
            <a
              className="added__cart--continue-shopping"
              onClick={() => {
                document.body.classList.toggle("stopScrolling");
                dispatch(changeStatusAddedCartSuccess(false));
              }}
            >
              Continue Shopping
            </a>
            <Link
              className="added__cart--view-cart button secondary-button"
              onClick={() => {
                document.body.classList.toggle("stopScrolling");
                dispatch(changeStatusAddedCartSuccess(false));
              }}
              to="/cart"
            >
              View Cart
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(AddCartSuccessMessage);
