export default function () {
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
      <div className="raq-action-button d-flex justify-content-center">
        <a className="raq-continue-shopping">Continue Shopping</a>
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
