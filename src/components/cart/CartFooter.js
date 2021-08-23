import { memo } from "react";
import CartInformation from "./CartInformation";
import CartTotal from "./CartTotal";

function CartFooter() {
  return (
    <div className="row cart-footer">
      <CartInformation />
      <CartTotal />
    </div>
  );
}
export default memo(CartFooter);
