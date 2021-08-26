import { memo } from "react";
import { useDispatch } from "react-redux";

import { setShowQuote } from "../../features/quote/quoteSlice";

function QuoteForm() {
  const dispatch = useDispatch();
  return (
    <div className="raq-form">
      <div className="d-flex flex-wrap form-group-row">
        <div className="form-group">
          <label className="control-label">Name</label>
          <div className="raq-input">
            <input
              type="text"
              id="raq-form_name"
              name="raq-form_name"
              required
              className="form-control"
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label">Email</label>
          <div className="raq-input">
            <input
              type="email"
              pattern="[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{1,63}$"
              id="raq-form_email"
              name="raq-form_email"
              required
              className="form-control"
            />
          </div>
        </div>
      </div>
      <div className="form-group">
        <label className="control-label">Message</label>
        <div className="raq-input">
          <textarea
            className="form-control"
            id="raq-form_message"
            name="raq-form_message"
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
          id="submitRAQForm"
          name="submitRAQForm"
          value="Send Message"
        />
      </div>
    </div>
  );
}
export default memo(QuoteForm);
