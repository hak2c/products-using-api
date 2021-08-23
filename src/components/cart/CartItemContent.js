import { memo, useContext } from "react";
import * as Unicons from "@iconscout/react-unicons";

import { API_URL, moneyFormat } from "../Utils";
import { CartState } from "../CartPage";

function CartItemContent({ index, product }) {
  const {
    handleChangeQuantityButton,
    handleChangeQuantityInput,
    handleRemoveProduct,
  } = useContext(CartState);
  const { id, image, price, qty, color, size, title, slug, total } = product;
  return (
    <ul className="d-flex flex-wrap align-items-center cart-item">
      <li className="item-image">
        <img src={API_URL + image} />
      </li>
      <li className="item-details">
        <p className="item-details__title mb-3">
          <a target="_blank" href={"product/" + slug}>
            {title}
          </a>
        </p>
        <div className="item-details__variants">
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
      <li className="item-price">
        <p>{moneyFormat(price)}</p>
      </li>
      <li className="item-quantity">
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
      <li className="item-total">
        <p>{moneyFormat(total)}</p>
      </li>
      <li className="item-remove" onClick={() => handleRemoveProduct(index)}>
        <Unicons.UilTimes size="20" color="#000000" />
      </li>
    </ul>
  );
}
export default memo(CartItemContent);
