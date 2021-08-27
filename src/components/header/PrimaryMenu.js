import { BrowserRouter as Router, Link } from "react-router-dom";
import * as Unicons from "@iconscout/react-unicons";
import { memo } from "react";
import { useSelector } from "react-redux";

function PrimaryMenu() {
  const { collections } = useSelector((state) => state.collections);
  return (
    <div className="primary-menu d-none d-lg-block">
      <ul className="nav justify-content-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#">Shop</a>
          <Unicons.UilAngleDown size="21" color="#ffffff" />
          <div className="sub-menu">
            <ul>
              {collections.map((item) => (
                <li key={item.id}>
                  <Link to={"/collection/" + item.id + "/" + item.slug}>
                    {item.title}
                  </Link>
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
export default memo(PrimaryMenu);
