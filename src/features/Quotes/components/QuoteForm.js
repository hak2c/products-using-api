import { memo } from "react";
import { useDispatch } from "react-redux";

import { setShowQuote } from "../quoteSlice";

function QuoteForm() {
  const dispatch = useDispatch();
  return (
    <div className="request__quote--infor">
      <div className="d-flex flex-wrap form-group-row">
        <div className="form-group">
          <label className="control-label">Name</label>
          <div className="request__quote--infor-input">
            <input
              type="text"
              id="request__quote--infor-name"
              name="request__quote--infor-name"
              required
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label">Email</label>
          <div className="request__quote--infor-input">
            <input
              type="email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              id="request__quote--infor-email"
              name="request__quote--infor-email"
              required
              className="form-control"
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label">Message</label>
        <div className="request__quote--infor-input">
          <textarea
            className="form-control"
            id="request__quote--infor-message"
            name="request__quote--infor-message"
            required
          ></textarea>
        </div>
      </div>
      <div className="request__quote--action-button d-flex justify-content-center">
        <a
          className="request__quote--continue-shopping"
          onClick={() => dispatch(setShowQuote(false))}
        >
          Continue Shopping
        </a>
        <input
          type="submit"
          id="request__quote--form-submit"
          name="request__quote--form-submit"
          value="Send Message"
        />
      </div>
    </div>
  );
}
export default memo(QuoteForm);
