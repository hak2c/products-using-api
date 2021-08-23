import { memo, useContext } from "react";
import { AppState } from "../../App";

import CartItemContent from "./CartItemContent";

function CartItems() {
  const { productsInCart } = useContext(AppState);
  return (
    <div className="cart-items">
      {productsInCart.map((product, index) => (
        <CartItemContent key={index} index={index} product={product} />
      ))}
    </div>
  );
}
export default memo(CartItems);
