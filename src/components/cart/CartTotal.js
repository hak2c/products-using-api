import axios from "axios";
import { memo } from "react";
import { useSelector } from "react-redux";

import productApi from "../../api/productApi";

function CartTotal() {
  const { subTotal, tax } = useSelector((state) => state.cart);
  const total = Number((subTotal + tax).toFixed(2));

  function handleCheckout() {
    axios
      .post("/checkout", {
        subTotal: subTotal,
        tax: tax,
        total: total,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  return (
    <div className="col-md-6 cart_total">
      <div className="cart__total--details">
        <div className="subtotal d-flex">
          <p className="text-start mb-0">Subtotal</p>
          <p className="subtotal-price text-end mb-0">
            <span className="cart-price">
              {productApi.moneyFormat(subTotal)}
            </span>
          </p>
        </div>
        <div className="shipping d-flex">
          <p className="text-start mb-0">VAT tax</p>
          <p className="text-end mb-0">{productApi.moneyFormat(tax)}</p>
        </div>
        <hr></hr>
        <div className="total d-flex">
          <p className="text-start mb-3">Total</p>
          <p className="subtotal-price text-end mb-3">
            <span className="cart-price">{productApi.moneyFormat(total)}</span>
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
          onClick={handleCheckout}
        />
      </div>
    </div>
  );
}

export default memo(CartTotal);
