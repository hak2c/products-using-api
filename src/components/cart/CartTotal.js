import { moneyFormat } from "../Utils";
import { AppState } from "../../App";
import { memo, useContext } from "react";

function CartTotal() {
  const { subTotal, tax } = useContext(AppState);
  const total = Number((subTotal + tax).toFixed(2));
  return (
    <div className="col-md-6 cart_total">
      <div className="cart__total--details">
        <div className="subtotal d-flex">
          <p className="text-start mb-0">Subtotal</p>
          <p className="subtotal-price text-end mb-0">
            <span className="cart-price">{moneyFormat(subTotal)}</span>
          </p>
        </div>
        <div className="shipping d-flex">
          <p className="text-start mb-0">VAT tax</p>
          <p className="text-end mb-0">{moneyFormat(tax)}</p>
        </div>
        <hr></hr>
        <div className="total d-flex">
          <p className="text-start mb-3">Total</p>
          <p className="subtotal-price text-end mb-3">
            <span className="cart-price">{moneyFormat(total)}</span>
          </p>
        </div>
      </div>
      <div className="cart__total--button">
        <input
          className="cart__total--button-submit"
          type="submit"
          id="submitCart"
          name="submitCart"
          value="Check Out"
        />
      </div>
    </div>
  );
}

export default memo(CartTotal);
