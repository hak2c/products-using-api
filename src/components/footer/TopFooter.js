export default function TopFooter({ collections }) {
  return (
    <div className="row top-footer">
      <div className="col-lg-4 mb-2 mb-lg-0">
        <div className="footer-title">
          <h3>About</h3>
        </div>
        <div className="footer-content">
          <p>
            We make beautiful, high quality goods that are designed especially
            for you. Discover our story and meet the people that make our brand
            what it is.
          </p>
        </div>
      </div>
      <div className="col-lg-2 mb-2 mb-lg-0">
        <div className="footer-title">
          <h3>Shop</h3>
        </div>
        <div className="footer-content">
          <ul className="footer-menu">
            {collections.map((item) => (
              <li key={item.id}>
                <a href={"collections.html?id=" + item.id}>{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="col-lg-2 mb-2 mb-lg-0">
        <div className="footer-title">
          <h3>Information</h3>
        </div>
        <div className="footer-content">
          <ul className="footer-menu">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4 mb-2 mb-lg-0">
        <div className="footer-title">
          <h3>Connect</h3>
        </div>
        <div className="footer-content">
          <p>Join our mailing list for updates</p>
          <div className="connect-form mt-2">
            <form action="">
              <div className="d-flex justify-content-center">
                <input
                  type="email"
                  className="form-control"
                  id="email-connect"
                  name="email"
                  placeholder="Enter email address"
                />
                <button
                  type="submit"
                  className="btn btn-primary"
                  id="connect-email-button"
                >
                  Join
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
