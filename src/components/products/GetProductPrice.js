import { useContext } from "react";
import { moneyFormat } from "../Utils";

import { ProductState } from "../ProductPage";

export default function GetProductPrice() {
  const { product } = useContext(ProductState);
  return (
    <>
      {typeof product.compare_price !== "undefined" ? (
        <div className="product__information--content-section product-price d-flex justify-content-start align-items-center">
          <span className="price-item price-item--sale">
            {moneyFormat(product.price)}
          </span>
          <span className="price-item price-item--compare">
            {moneyFormat(product.compare_price)}
          </span>
          <span className="price-badge price-badge--sale">Sale</span>
        </div>
      ) : (
        <div className="product__information--content-section product-price">
          <span className="price-item">{moneyFormat(product.price)}</span>
        </div>
      )}
    </>
  );
}
