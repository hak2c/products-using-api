export default function SubcribeEmail() {
  return (
    <section className="subcribe__email">
      <div className="container">
        <div className="section-title text-center">
          <h2>Subscribe to our newsletter</h2>
          <div className="section-pretext text-center mx-auto mt-3">
            <p>
              Signup for our newsletter to stay up to date on sales and events.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-6 col-lg-8 col-md-10 mx-auto">
            <div className="subcribe__email--form">
              <form action="">
                <div className="d-flex justify-content-center">
                  <input
                    type="email"
                    className="form-control"
                    id="subcribe__email--subcribe"
                    name="email"
                    placeholder="Enter your email address"
                  />
                  <button
                    type="submit"
                    className="btn btn-primary"
                    id="subcribe__email--button"
                  >
                    Join
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
