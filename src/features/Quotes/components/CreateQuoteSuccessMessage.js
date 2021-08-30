import { memo } from "react";
import * as Unicons from "@iconscout/react-unicons";
import { useDispatch } from "react-redux";

import { changeStatusCreateQuoteSuccess } from "../quoteSlice";

function CreateQuoteSuccessMessage() {
  const dispatch = useDispatch;
  return (
    <div className="request__quote">
      <div className="request__quote--overlay"></div>
      <div className="request__quote--popup">
        <span
          className="request__quote--close"
          onClick={() => {
            document.body.classList.toggle("stopScrolling");
            dispatch(changeStatusCreateQuoteSuccess(false));
          }}
        >
          <Unicons.UilTimes size="20" color="#000000" />
        </span>
        <div className="request__quote--content">
          <div className="request__quote--message">
            Thank you for submitting a request a quote!
          </div>
          <div className="request__quote--action-button d-flex justify-content-center">
            <a
              className="request__quote--continue-shopping"
              onClick={() => {
                document.body.classList.toggle("stopScrolling");
                dispatch(changeStatusCreateQuoteSuccess(false));
              }}
            >
              Continue Shopping
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default memo(CreateQuoteSuccessMessage);
