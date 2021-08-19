import { ProductState } from "../ProductPage";

import closeIcn from "../../images/icons/close.png";
import { useContext } from "react";

export default function AddCartSuccessMessage() {
  const { setAddProductToCartMessage } = useContext(ProductState);
  return (
    <div className="raq-overlay">
      <div className="raq-bg"></div>
      <div className="raq-popup">
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
