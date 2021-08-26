import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Unicons from "@iconscout/react-unicons";

import { API_URL, moneyFormat, CART_KEY } from "../Utils";
import {
  setProductsInCart,
  changeItemCartQuantityWithButton,
  changeItemCartQuantityWithInput,
} from "../../features/cart/cartSlice";

function CartItemContent({ index, product }) {
  const { products: productsInCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  function handleChangeQuantityWithInput(index, e) {
    let value = Number(e.target.value);
    if (!isNaN(value)) {
      dispatch(changeItemCartQuantityWithInput({ index, value }));
    }
  }
  function handleChangeQuantityWithButton(index, isDown = false) {
    dispatch(changeItemCartQuantityWithButton({ index, isDown }));
  }
  function handleRemoveProduct(index) {
    let newProducts = [...productsInCart];
    newProducts.splice(index, 1);
    dispatch(setProductsInCart(newProducts));
  }
  const { image, price, qty, color, size, title, slug, total } = product;
  return (
    <ul className="d-flex flex-wrap align-items-center cart--item">
      <li className="cart--item-image">
        <img src={API_URL + image} />
      </li>
      <li className="cart--item-details">
        <p className="cart--item-title mb-3">
          <a target="_blank" href={"product/" + slug}>
            {title}
          </a>
        </p>
        <div className="cart--item-variants">
          {size != "" && (
            <p>
              <strong>Size:</strong> {size}
            </p>
          )}
          {color != "" && (
            <p>
              <strong>Color:</strong> {color}
            </p>
          )}
        </div>
      </li>
      <li className="cart--item-price">
        <p>{moneyFormat(price)}</p>
      </li>
      <li className="cart--item-quantity">
        <a
          className="cart--item-qty-control cart--item-qty-down"
          field={"qty-product-" + index}
          onClick={
            qty > 1
              ? () => handleChangeQuantityWithButton(index, true)
              : undefined
          }
        >
          &#45;
        </a>
        <input
          min="1"
          type="text"
          name={"qty-product-" + index}
          className="quantity"
          id={"updates_" + index}
          value={qty}
          onChange={(e) => handleChangeQuantityWithInput(index, e)}
        />
        <a
          className="cart--item-qty-control cart--item-qty-up"
          field={"qty-product-" + index}
          onClick={() => handleChangeQuantityWithButton(index)}
        >
          &#43;
        </a>
      </li>
      <li className="cart--item-total text-end">
        <p>{moneyFormat(total)}</p>
      </li>
      <li
        className="cart--item-remove"
        onClick={() => handleRemoveProduct(index)}
      >
        <Unicons.UilTimes size="20" color="#000000" />
      </li>
    </ul>
  );
}
export default memo(CartItemContent);
