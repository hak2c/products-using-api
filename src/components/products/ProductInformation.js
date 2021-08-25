import { memo, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";

import { ProductState } from "../ProductPage";
import { addProductToCart } from "../Utils";
import {
  changeStatusAddedCartSuccess,
  setProductsToCart,
} from "../../features/cart/cartSlice";

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
  const { products: productsInCart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  function handleAddProductToCart() {
    const addedProduct = {
      id: product.id,
      image: product.images[0],
      title: product.title,
      slug: product.slug,
      size: sizeValue,
      color: colorValue,
      qty: quantity,
      price: product.price,
      total: (quantity * product.price).toFixed(2),
    };
    dispatch(setProductsToCart(addProductToCart(addedProduct, productsInCart)));
    document.body.classList.toggle("stopScrolling");
    dispatch(changeStatusAddedCartSuccess(true));
  }
  function productDescription() {
    return { __html: product.description };
  }
  return (
    <div className="col-lg-6 col-md-5 product__information">
      <div className="product__information--content">
        <h1 className="product__information--content-section product-title">
          {product.title}
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
            <a className="addQuoteButton button secondary-button">
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
