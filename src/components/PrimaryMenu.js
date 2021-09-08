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
          <Link to="/collections">Shop</Link>
          <Unicons.UilAngleDown size="21" color="#ffffff" />
          <div className="sub-menu">
            <ul>
              {collections?.map((item) => (
                <li key={item.id}>
                  <Link to={"/collections/" + item.id + "/" + item.slug}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/blogs">Blogs</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </div>
  );
}
export default memo(PrimaryMenu);
