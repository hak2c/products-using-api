import { ProductState } from "../ProductPage";

import closeIcn from "../../images/icons/close.png";
import { useContext } from "react";

export default function AddCartSuccessMessage() {
  const { addProductToCartMessage, setAddProductToCartMessage } =
    useContext(ProductState);
  const animateClass = addProductToCartMessage
    ? " animate__fadeInUp"
    : " animate__fadeOutUp";
  return (
    <div className="raq-overlay animate__animated">
      <div className="raq-bg"></div>
      <div className={"animate__animated raq-popup" + animateClass}>
        <span
          className="close-raq-popup"
          onClick={() => setAddProductToCartMessage(false)}
        >
          <img src={closeIcn} alt="Close popup" />
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
