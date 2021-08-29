import { memo } from "react";
import { Link } from "react-router-dom";

import productApi from "../../api/productApi";

function ProductContent({ product, colClass }) {
  return (
    <div className={"product " + colClass}>
      <div className="product-content">
        {!product.available && (
          <span className="icn sold-out-icn">Sold out</span>
        )}
        {typeof product.compare_price !== "undefined" && (
          <span className="icn sale-icn">Sale</span>
        )}
        <Link to={"/product/" + product.slug}>
          <img
            src={process.env.REACT_APP_API_URL + product.images[0]}
            alt={product.title}
          />
        </Link>
        <div className="product-info text-center">
          <div className="product-title">
            <Link to={"/product/" + product.slug}>{product.title}</Link>
          </div>
          {typeof product.compare_price !== "undefined" ? (
            <div className="product-price">
              <span className="price-item price-item--sale">
                {productApi.moneyFormat(product.price)}
              </span>
              <span className="price-item price-item--compare">
                {productApi.moneyFormat(product.compare_price)}
              </span>
            </div>
          ) : (
            <div className="product-price">
              <span className="price-item">
                {productApi.moneyFormat(product.price)}
              </span>
            </div>
          )}
          <div className="product-color pt-3 text-center d-flex justify-content-center align-items-center">
            {typeof product.color !== "undefined" &&
              product.color.length > 0 &&
              product.color.map((color) => (
                <span key={color.name} className="color-icn">
                  <span
                    style={{
                      backgroundImage:
                        "url(" +
                        process.env.REACT_APP_API_URL +
                        color.thumb +
                        ")",
                    }}
                  ></span>
                </span>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(ProductContent);
