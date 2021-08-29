import { memo, useContext } from "react";
import { useDispatch } from "react-redux";

import { ProductState } from "./ProductPage";
import productApi from "../../api/productApi";
import {
  changeStatusAddedCartSuccess,
  setProductsInCart,
} from "../../features/cart/cartSlice";

import {
  setProductsInQuote,
  changeStatusAddedQuoteSuccess,
} from "../../features/quote/quoteSlice";

import GetProductPrice from "./GetProductPrice";
import GetProductVariant from "./GetProductVariant";

function ProductInformation() {
  const {
    product,
    quantity,
    handleChangeQuantityInput,
    setQuantity,
    sizeValue,
    colorValue,
  } = useContext(ProductState);
  const dispatch = useDispatch();
  const { id, images, title, slug, price, description } = product;

  function handleAddProductToCart() {
    const addedProduct = {
      id: id,
      image: images[0],
      title: title,
      slug: slug,
      size: sizeValue,
      color: colorValue,
      qty: quantity,
      price: price,
      total: Number((quantity * price).toFixed(2)),
    };
    dispatch(setProductsInCart(productApi.addProductToCart(addedProduct)));
    document.body.classList.toggle("stopScrolling");
    dispatch(changeStatusAddedCartSuccess(true));
  }

  function handleAddProductToQuote() {
    const addedProduct = {
      id: id,
      image: images[0],
      title: title,
      slug: slug,
      size: sizeValue,
      color: colorValue,
      qty: quantity,
      price: price,
      total: Number((quantity * price).toFixed(2)),
    };
    dispatch(setProductsInQuote(productApi.addProductToQuote(addedProduct)));
    document.body.classList.toggle("stopScrolling");
    dispatch(changeStatusAddedQuoteSuccess(true));
  }

  function productDescription() {
    return { __html: description };
  }
  return (
    <div className="col-lg-6 col-md-5 product__information">
      <div className="product__information--content">
        <h1 className="product__information--content-section product-title">
          {title}
        </h1>
        <GetProductPrice />
        <form
          className="product__information--content-section add-product-form"
          id="add-product"
        >
          <GetProductVariant />
          <div className="form-group variant-label">
            <label>Quantity</label>
          </div>
          <div className="qty-selection">
            <a
              className="quantity-control quantity-control-down"
              field="quantity"
              onClick={() => {
                if (quantity > 1) setQuantity(quantity - 1);
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
            <a className="addToCart button" onClick={handleAddProductToCart}>
              Add To Cart
            </a>
          </div>
          <p className="mt-4 text-center text-uppercase bold">Or</p>
          <div className="mt-4">
            <a
              className="addQuoteButton button secondary-button"
              onClick={handleAddProductToQuote}
            >
              Request a Quote
            </a>
          </div>
        </form>
        <div
          className="product__information--content-section product-description"
          dangerouslySetInnerHTML={productDescription()}
        />
      </div>
    </div>
  );
}

export default memo(ProductInformation);
