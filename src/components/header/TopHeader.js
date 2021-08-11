import fbSrc from "../../images/icons/facebook.png";
import instagramSrc from "../../images/icons/instagram.png";
import twitterSrc from "../../images/icons/twitter.png";
import linkedinSrc from "../../images/icons/linkedin.png";
import searchIcn from "../../images/icons/search.png";
import cartSrc from "../../images/icons/cart.png";

export default function TopHeader() {
  return (
    <div className="top-header">
      <div className="container">
        <div className="row text-uppercase">
          <div className="d-none d-lg-block col-lg-4">
            <div className="d-flex align-items-center top-socials">
              <a href="#">
                <img src={fbSrc} alt="facebook" />
              </a>
              <a href="#">
                <img src={instagramSrc} alt="instagram" />
              </a>
              <a href="#">
                <img src={twitterSrc} alt="twitter" />
              </a>
              <a href="#">
                <img src={linkedinSrc} alt="linkedin" />
              </a>
            </div>
          </div>
          <div className="col-lg-4 text-center">
            FREE SHIPPING ON ORDERS OVER $199
          </div>
          <div className="d-none d-lg-block col-lg-4">
            <div
              className="d-flex justify-content-end align-items-center position-relative"
              style={{ gap: "10px" }}
            >
              <span className="search-icon">
                <img
                  data-toggle="collapse"
                  data-target="#search-form-1"
                  aria-expanded="true"
                  aria-controls="search-form-1"
                  src={searchIcn}
                  alt=""
                />
              </span>
              <form
                name="search"
                action="search.html"
                className="search-form form-inline"
                id="search-form-1"
              >
                <div className="form-group">
                  <input
                    className="form-control"
                    id="search"
                    type="text"
                    placeholder="Search"
                    name="key"
                  />
                </div>
              </form>
              <span className="cart">
                <img className="mr-1" src={cartSrc} alt="" />
                <span className="cart-count">0</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
