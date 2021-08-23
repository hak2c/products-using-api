import { memo, useContext } from "react";
import { AppState } from "../../App";
import * as Unicons from "@iconscout/react-unicons";

import QuoteForm from "./QuoteForm";
import QuoteItem from "./QuoteItem";

function QuotePopup() {
  const { productsInQuote, setShowQuote } = useContext(AppState);
  return (
    <div className="request__quote">
      <div className="request__quote--overlay"></div>
      <div className="request__quote--popup">
        <span
          className="request__quote--popup-close"
          onClick={() => setShowQuote(false)}
        >
          <Unicons.UilTimes size="20" color="#000000" />
        </span>
        <div className="request__quote--popup-content">
          <div className="request__quote--list">
            <div className="request__quote--list-content">
              <form
                id="request__quote--list-form"
                name="request__quote--list-form"
              >
                <table className="table request__quote--table">
                  <thead>
                    <tr>
                      <th className="request__quote--table-image"></th>
                      <th>Product</th>
                      <th className="text-center request__quote--table-size">
                        Size
                      </th>
                      <th className="text-center request__quote--table-color">
                        Color
                      </th>
                      <th className="text-center request__quote--table-qty">
                        Quantity
                      </th>
                      <th className="text-center request__quote--table-price">
                        Price
                      </th>
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

export default memo(QuotePopup);
