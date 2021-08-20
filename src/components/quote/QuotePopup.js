import { useContext } from "react";
import { AppState } from "../../App";
import * as Unicons from "@iconscout/react-unicons";

import QuoteForm from "./QuoteForm";
import QuoteItem from "./QuoteItem";

export default function QuotePopup() {
  const { productsInQuote, setShowQuote } = useContext(AppState);
  return (
    <div className="raq-overlay">
      <div className="raq-bg"></div>
      <div className="raq-popup">
        <span className="close-raq-popup" onClick={() => setShowQuote(false)}>
          <Unicons.UilTimes size="20" color="#000000" />
        </span>
        <div className="raq-popup-content">
          <div className="raq-quote-list">
            <div className="raq-quote-list-content">
              <form id="raq-quote-list-form" name="raq-quote-list-form">
                <table className="table raq-table">
                  <thead>
                    <tr>
                      <th className="raq_product_image"></th>
                      <th>Product</th>
                      <th className="text-center raq_product_size">Size</th>
                      <th className="text-center raq_product_color">Color</th>
                      <th className="text-center raq_product_qty">Quantity</th>
                      <th className="text-center raq_product_price">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productsInQuote.map((product, index) => (
                      <QuoteItem
                        key={product.id}
                        product={product}
                        index={index}
                      />
                    ))}
                  </tbody>
                </table>
                <QuoteForm />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
