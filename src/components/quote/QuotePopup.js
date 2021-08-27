import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import * as Unicons from "@iconscout/react-unicons";

import {
  setShowQuote,
  changeStatusCreateQuoteSuccess,
} from "../../features/quote/quoteSlice";

import QuoteForm from "./QuoteForm";
import QuoteItem from "./QuoteItem";

function QuotePopup() {
  const dispatch = useDispatch();
  const { products: productsInQuote } = useSelector((state) => state.quote);
  function createNewQuote(e) {
    e.preventDefault();
    dispatch(setShowQuote(false));
    dispatch(changeStatusCreateQuoteSuccess(true));
  }
  return (
    <div className="request__quote">
      <div className="request__quote--overlay"></div>
      <div className="request__quote--popup">
        <span
          className="request__quote--close"
          onClick={() => {
            document.body.classList.toggle("stopScrolling");
            dispatch(setShowQuote(false));
          }}
        >
          <Unicons.UilTimes size="20" color="#000000" />
        </span>
        <div className="request__quote--content">
          {productsInQuote.length > 0 ? (
            <div className="request__quote--list">
              <div className="request__quote--list-content">
                <form
                  id="request__quote--form"
                  name="request__quote--form"
                  onSubmit={(e) => createNewQuote(e)}
                >
                  <table className="table request__quote--table">
                    <thead>
                      <tr>
                        <th className="request__quote--item-image"></th>
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
                          key={index}
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
          ) : (
            <>
              <div className="request__quote--message">
                Your quote is currently empty.
              </div>
              <div className="request__quote--action-button d-flex justify-content-center">
                <a
                  className="request__quote--continue-shopping"
                  onClick={() => {
                    document.body.classList.toggle("stopScrolling");
                    dispatch(setShowQuote(false));
                  }}
                >
                  Continue Shopping
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(QuotePopup);
