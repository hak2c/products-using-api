import { BrowserRouter as Router, Link } from "react-router-dom";

import { API_URL } from "../Utils";
import { AppState } from "../../App";
import { memo, useContext } from "react";

function QuoteItem({ product, index }) {
  const { productsInQuote } = useContext(AppState);
  function handleRemoveItem() {
    productsInQuote.splice(index, 1);
  }
  return (
    <tr className="request__quote--table-row">
      <td className="request__quote--table-image">
        <Link to={"/product/" + product.slug}>
          <img src={API_URL + product.image} alt={product.title} />
        </Link>
      </td>
      <td class="raq_product_title d-flex flex-column">
        <Link to={"/product/" + product.slug}>{product.title}</Link>
        <p>
          <a class="raq_remove_product" onClick={handleRemoveItem}>
            Remove
          </a>
        </p>
      </td>
    </tr>
  );
}

export default memo(QuoteItem);
