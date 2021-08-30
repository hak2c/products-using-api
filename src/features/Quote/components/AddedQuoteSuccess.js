import { memo } from "react";
import * as Unicons from "@iconscout/react-unicons";
import { useDispatch } from "react-redux";

import { setShowQuote, changeStatusAddedQuoteSuccess } from "../quoteSlice";

function AddedQuoteSuccess() {
  const dispatch = useDispatch();
  return (
    <div className="request__quote">
      <div className="request__quote--overlay"></div>
      <div className="request__quote--popup">
        <span
          className="request__quote--close"
          onClick={() => {
            document.body.classList.toggle("stopScrolling");
            dispatch(changeStatusAddedQuoteSuccess(false));
          }}
        >
          <Unicons.UilTimes size="20" color="#000000" />
        </span>
        <div className="request__quote--content">
          <div className="request__quote--message">
            Add product to quote successfully!
          </div>
          <div className="request__quote--action-button d-flex justify-content-center">
            <a
              className="request__quote--continue-shopping"
              onClick={() => {
                document.body.classList.toggle("stopScrolling");
                dispatch(changeStatusAddedQuoteSuccess(false));
              }}
            >
              Continue Shopping
            </a>
            <a
              className="request__quote--view"
              onClick={() => {
                dispatch(changeStatusAddedQuoteSuccess(false));
                dispatch(setShowQuote(true));
              }}
            >
              View Quote
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(AddedQuoteSuccess);
