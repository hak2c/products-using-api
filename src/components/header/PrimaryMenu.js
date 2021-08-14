import { BrowserRouter as Router, Link } from "react-router-dom";

import arrowDownIcn from "../../images/icons/arrow-down.png";

export default function PrimaryMenu({ collections }) {
  return (
    <div className="primary-menu d-none d-lg-block">
      <ul className="nav justify-content-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#">Shop</a>
          <img src={arrowDownIcn} alt="" />
          <div className="sub-menu">
            <ul>
              {collections.map((item) => (
                <li key={item.id}>
                  <Link to={"/collection/" + item.id}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
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
    </div>
  );
}
