import { useContext, memo } from "react";
import { AppState } from "../../App";

function CartContentHeader() {
  const { productsInCart } = useContext(AppState);
  return (
    <div className="row cart__content--header align-items-center">
      <div className="col-4">
        <a onClick={() => history.back()}>
          &lt; <span className="d-none d-md-inline">Continue Shopping</span>
        </a>
      </div>
      <div className="col-4 text-center">
        <h3 className="cart__content--title">Cart</h3>
      </div>
      <div className="col-4 text-end">{productsInCart.length} Item(s)</div>
    </div>
  );
}
export default memo(CartContentHeader);
