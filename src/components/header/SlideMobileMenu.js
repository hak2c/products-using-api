import arrowDownIcn from "../../images/icons/arrow-down-mobile.png";
import fbSrc from "../../images/icons/facebook-subc.png";
import instagramSrc from "../../images/icons/instagram-subc.png";
import twitterSrc from "../../images/icons/twitter-subc.png";
import linkedinSrc from "../../images/icons/linkedin-subc.png";

export default function SlideMobileMenu({ collections }) {
  return (
    <aside className="animate__animated" id="slideout-mobile-navigation">
      <div className="slideout-mobile-overlay"></div>
      <div className="animate__animated slideout-mobile-content">
        <div className="close-navigation">
          <div className="icon-close"></div>
        </div>
        <div className="mobile-menu">
          <ul className="nav flex-column justify-content-center">
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="#">Shop</a>
              <div
                className="d-inline-block arrow"
                data-toggle="collapse"
                data-target="#sub-menu-1"
                aria-expanded="true"
                aria-controls="sub-menu-1"
              >
                <img src={arrowDownIcn} alt="" />
              </div>
            </li>
            <li className="sub-menu" id="sub-menu-1">
              <ul>
                {collections.map((item) => (
                  <li key={item.id}>
                    <a href={"collections.html?id=" + item.id}>{item.title}</a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a href="contact.html">Contact</a>
            </li>
            <li>
              <a href="blogs.html">Blog</a>
            </li>
            <li>
              <a href="about.html">About</a>
            </li>
          </ul>
          <div className="mobile-menu__search">
            <form
              name="search"
              action="search.html"
              className="search-form form-inline"
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
          </div>
          <div className="d-flex justify-content-center align-items-center mobile-menu__socials">
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
          <div className="mobile-menu__featured-text text-center">
            <p>
              <strong>Featured Text</strong>
            </p>
            <p>
              <em>A great place to share about a sale!</em>
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}
