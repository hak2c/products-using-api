import { useContext, memo } from "react";
import { ProductState } from "./ProductPage";

import productApi from "../../api/productApi";

function GetProductPrice() {
  const { product } = useContext(ProductState);
  return (
    <>
      {typeof product.compare_price !== "undefined" ? (
        <div className="product__information--content-section product-price d-flex justify-content-start align-items-center">
          <span className="price-item price-item--sale">
            {productApi.moneyFormat(product.price)}
          </span>
          <span className="price-item price-item--compare">
            {productApi.moneyFormat(product.compare_price)}
          </span>
          <span className="price-badge price-badge--sale">Sale</span>
        </div>
      ) : (
        <div className="product__information--content-section product-price">
          <span className="price-item">
            {productApi.moneyFormat(product.price)}
          </span>
        </div>
      )}
    </>
  );
}
export default memo(GetProductPrice);
