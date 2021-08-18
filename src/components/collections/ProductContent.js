import { Link } from "react-router-dom";

import { moneyFormat, API_URL } from "../Utils";

export default function ProductContent({ product, colClass }) {
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
          <img src={API_URL + product.images[0]} alt={product.title} />
        </Link>
        <div className="product-info text-center">
          <div className="product-title">
            <Link to={"/product/" + product.slug}>{product.title}</Link>
          </div>
          {typeof product.compare_price !== "undefined" ? (
            <div className="product-price">
              <span className="price-item price-item--sale">
                {moneyFormat(product.price)}
              </span>
              <span className="price-item price-item--compare">
                {moneyFormat(product.compare_price)}
              </span>
            </div>
          ) : (
            <div className="product-price">
              <span className="price-item">{moneyFormat(product.price)}</span>
            </div>
          )}
          <div className="product-color pt-3 text-center d-flex justify-content-center align-items-center">
            {typeof product.color !== "undefined" &&
              product.color.length > 0 &&
              product.color.map((color) => (
                <span key={color.name} className="color-icn">
                  <span
                    style={{
                      backgroundImage: "url(" + API_URL + color.thumb + ")",
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
