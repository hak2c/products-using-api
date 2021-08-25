import { memo } from "react";
import { useSelector } from "react-redux";

import CartItemContent from "./CartItemContent";

function CartItems() {
  const { products: productsInCart } = useSelector((state) => state.cart);
  return (
    <div className="cart--items">
      {productsInCart.map((product, index) => (
        <CartItemContent key={index} index={index} product={product} />
      ))}
    </div>
  );
}
export default memo(CartItems);
