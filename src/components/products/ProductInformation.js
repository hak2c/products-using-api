import { useState, useContext } from "react";

import { AppState } from "../../App";

import GetProductPrice from "./GetProductPrice";
import GetProductVariant from "./GetProductVariant";

export default function ProductInformation({ product }) {
  const { productsInCart, setProductsInCart } = useContext(AppState);
  const [quantity, setQuantity] = useState(1);
  const [sizeValue, setSizeValue] = useState("");

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
        <GetProductPrice product={product} />
        <form
          className="product__information--content-section add-product-form"
          id="add-product"
        >
          <GetProductVariant product={product} />
          <div className="form-group variant-label">
            <label>Quantity</label>
          </div>
          <div className="qty-selection">
            <a
              className="quantity-control quantity-control-down"
              field="quantity"
              onClick={() => {
                if (quantity > 0) setQuantity(quantity - 1);
              }}
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
              onClick={() => setQuantity(quantity + 1)}
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
