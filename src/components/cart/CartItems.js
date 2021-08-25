import { memo } from "react";
import { useSelector } from "react-redux";

import CartItemContent from "./CartItemContent";

function CartItems() {
  const products = useSelector((state) => state.cart.products);
  return (
    <div className="cart--items">
      {products.map((product, index) => (
        <CartItemContent key={index} index={index} product={product} />
      ))}
    </div>
  );
}
export default memo(CartItems);
