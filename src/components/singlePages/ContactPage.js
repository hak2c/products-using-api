import Breadcrumbs from "../Breadcrumbs";
import CollectionsList from "../CollectionsList";

import contactImg from "../../assets/images/contact.jpg";

export default function ContactPage() {
  return (
    <>
      <main>
        <div className="container">
          <Breadcrumbs location="Contact Us" />
          <div className="page-title">
            <h3>Contact Us</h3>
          </div>
          <div className="row flex-column-reverse flex-md-row">
            <div className="col-md-6 pr-md-25 pb-5">
              <div className="form-group">
                <label className="control-label">
                  <strong>Name</strong>
                </label>
                <input
                  placeholder="Name"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label className="control-label">
                  <strong>Email</strong>
                </label>
                <input
                  placeholder="Email"
                  type="email"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label className="control-label">
                  <strong>Phone</strong>
                </label>
                <input
                  placeholder="Phone"
                  type="text"
                  className="form-control"
                />
              </div>
              <div className="form-group">
                <label className="control-label">
                  <strong>Message</strong>
                </label>
                <textarea
                  placeholder="Message"
                  className="form-control"
                  rows="6"
                ></textarea>
              </div>
              <div className="form-group">
                <input type="submit" className="form-control" value="Send" />
              </div>
            </div>
            <div className="col-md-6 pl-md-25 pb-5">
              <img src={contactImg} className="d-block w-100" alt="" />
            </div>
          </div>
        </div>
      </main>
      <CollectionsList />
    </>
  );
}
