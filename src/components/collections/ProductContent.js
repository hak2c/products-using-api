import { moneyFormat } from "../Utils";

const URL = "https://testament-store.herokuapp.com/";

export default function ProductContent({ product }) {
  return (
    <div className="product col-6 col-md-4 pb-5">
      <div className="product-content">
        {!product.available && (
          <span className="icn sold-out-icn">Sold out</span>
        )}
        {typeof product.compare_price != "undefined" && (
          <span className="icn sale-icn">Sale</span>
        )}
        <a href={"product.html?id=" + product.id}>
          <img src={URL + product.images[0]} alt={product.title} />
        </a>
        <div className="product-info text-center">
          <div className="product-title">
            <a href={"product.html?id=" + product.id}>{product.title}</a>
          </div>
          {typeof product.compare_price != "undefined" ? (
            <div className="product-price">
              <span className="price-item price-item--sale">
                {moneyFormat(product.price)}
              </span>
              <span className="price-item price-item--compare">
                {moneyFormat(product.compare_price)}
              </span>
            </div>
          ) : (
            <div class="product-price">
              <span class="price-item">{moneyFormat(product.price)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
