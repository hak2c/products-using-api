import arrowDownIcn from "../../images/icons/arrow-down.png";

export default function PrimaryMenu({ collections }) {
  return (
    <div className="primary-menu d-none d-lg-block">
      <ul className="nav justify-content-center">
        <li>
          <a href="index.html">Home</a>
        </li>
        <li>
          <a href="#">Shop</a>
          <img src={arrowDownIcn} alt="" />
          <div className="sub-menu">
            <ul>
              {collections.map((item) => (
                <li key={item.id}>
                  <a href={"collections.html?id=" + item.id}>{item.title}</a>
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
