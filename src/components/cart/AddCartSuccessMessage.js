import * as Unicons from "@iconscout/react-unicons";

import { ProductState } from "../ProductPage";
import { memo, useContext } from "react";

function AddCartSuccessMessage() {
  const { setAddProductToCartMessage } = useContext(ProductState);
  return (
    <div className="raq-overlay">
      <div className="raq-bg"></div>
      <div className="raq-popup">
        <span
          className="close-raq-popup"
          onClick={() => setAddProductToCartMessage(false)}
        >
          <Unicons.UilTimes size="20" color="#000000" />
        </span>
        <div className="raq-popup-content">
          <div className="raq-message">Add product to cart successfully!</div>
          <div className="raq-action-button d-flex justify-content-center">
            <a
              className="raq-continue-shopping"
              onClick={() => setAddProductToCartMessage(false)}
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(AddCartSuccessMessage);
