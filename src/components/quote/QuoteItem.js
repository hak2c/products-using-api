import { BrowserRouter as Router, Link } from "react-router-dom";
import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";

import { API_URL, moneyFormat } from "../Utils";
import {
  changeQuoteItemQuantityWithButton,
  changeQuoteItemQuantityWithInput,
  setProductsInQuote,
} from "../../features/quote/quoteSlice";

function QuoteItem({ product, index }) {
  const dispatch = useDispatch();
  const { products: productsInQuote } = useSelector((state) => state.quote);
  const { slug, image, title, size, color, qty, total } = product;

  function handleRemoveItem(index) {
    let products = [...productsInQuote];
    products.splice(index, 1);
    dispatch(setProductsInQuote(products));
  }

  function handleChangeQuantityWithButton(index, isDown = false) {
    dispatch(changeQuoteItemQuantityWithButton({ index, isDown }));
  }

  function handleChangeQuantityWithInput(index, e) {
    let value = Number(e.target.value);
    if (!isNaN(value)) {
      dispatch(changeQuoteItemQuantityWithInput({ index, value }));
    }
  }

  return (
    <tr className="request__quote--table-row">
      <td className="request__quote--item-image">
        <Link to={"/product/" + slug}>
          <img src={API_URL + image} alt={title} />
        </Link>
      </td>
      <td className="request__quote--item-title d-flex flex-column">
        <Link to={"/product/" + slug}>{title}</Link>
        <p>
          <a
            className="request__quote--item-remove"
            onClick={() => handleRemoveItem(index)}
          >
            Remove
          </a>
        </p>
      </td>
      <td className="text-center">{size}</td>
      <td className="text-center">{color}</td>
      <td className="text-center raq_product_qty">
        <a
          className="request__quote--item-qty-control request__quote--item-qty-down"
          field={"qty-product-idx" + index}
          onClick={
            qty > 1
              ? () => handleChangeQuantityWithButton(index, true)
              : undefined
          }
        >
          &#45;
        </a>
        <input
          type="text"
          name={"qty-product-idx" + index}
          className="quantity"
          id={"updates_" + index}
          value={qty}
          onChange={(e) => handleChangeQuantityWithInput(index, e)}
        />
        <a
          className="request__quote--item-qty-control request__quote--item-qty-up"
          field={"qty-product-idx" + index}
          onClick={() => handleChangeQuantityWithButton(index)}
        >
          &#43;
        </a>
      </td>
      <td className="text-center request__quote--item-price">
        <span>{moneyFormat(total)}</span>
      </td>
    </tr>
  );
}

export default memo(QuoteItem);
