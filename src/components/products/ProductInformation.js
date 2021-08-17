import { useState } from "react";

import { moneyFormat } from "../Utils";

export default function ProductInformation({ product }) {
  const [quantity, setQuantity] = useState(1);

  function handleChangeQuantityInput(e) {
    let value = Number(e.target.value);
    if (!isNaN(value) && value > 1) {
      setQuantity(value);
    }
  }
  return (
    <div className="col-lg-6 col-md-5 product__information">
      <div className="product__information--content">
        <h1 className="product__information--content-section product-title">
          {product.title}
        </h1>
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
        <form
          className="product__information--content-section add-product-form"
          id="add-product"
        >
          <div className="form-group variant-label">
            <label>Quantity</label>
          </div>
          <div className="qty-selection">
            <a
              className="quantity-control quantity-control-down"
              field="quantity"
            >
              &#45;
            </a>
            <input
              min="1"
              type="text"
              name="quantity"
              className="quantity"
              value={quantity}
              onChange={(e) => handleChangeQuantityInput(e)}
            />
            <a
              className="quantity-control quantity-control-up"
              field="quantity"
            >
              &#43;
            </a>
          </div>
          <div className="add-to-cart mt-4">
            <a className="addToCart d-block">Add To Cart</a>
          </div>
          <p className="mt-4 text-center text-uppercase bold">Or</p>
          <div className="mt-4">
            <a className="addQuoteButton d-block">Request a Quote</a>
          </div>
        </form>
        <div className="product__information--content-section product-description"></div>
      </div>
    </div>
  );
}
