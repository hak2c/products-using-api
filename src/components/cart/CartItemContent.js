import { memo, useContext } from "react";
import * as Unicons from "@iconscout/react-unicons";

import { API_URL, moneyFormat } from "../Utils";
import { AppState } from "../../App";

function CartItemContent({ index, product }) {
  const {
    handleChangeQuantityButton,
    handleChangeQuantityInput,
    handleRemoveProduct,
  } = useContext(AppState);
  const { id, image, price, qty, color, size, title, slug, total } = product;
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
          className="qty-product-control qty-product-control-down"
          field={"qty-product-" + index}
          onClick={() => handleChangeQuantityButton(index, true)}
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
          onChange={(e) => handleChangeQuantityInput(index, e)}
        />
        <a
          className="qty-product-control qty-product-control-up"
          field={"qty-product-" + index}
          onClick={() => handleChangeQuantityButton(index)}
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
