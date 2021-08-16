import Slider from "react-slick";

const URL = "https://fake-server-products-api.herokuapp.com/";

export default function ProductImages({ product }) {
  const images = product.images;

  const mainImgOps = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    asNavFor: ".nav-image",
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: (
            <button type="button" class="slick-prev">
              <img src={URL + "images/icons/arrow-left.png"} />
            </button>
          ),
          nextArrow: (
            <button type="button" class="slick-next">
              <img src={URL + "images/icons/arrow-right.png"} />
            </button>
          ),
        },
      },
    ],
  };
  const navImgOps = {
    slidesToShow: 5,
    slidesToScroll: 1,
    vertical: true,
    infinite: true,
    asNavFor: ".main-image",
    arrows: true,
    prevArrow: (
      <button type="button" class="slick-prev">
        <img src={URL + "images/icons/arrow-left.png"} />
      </button>
    ),
    nextArrow: (
      <button type="button" class="slick-next">
        <img src={URL + "images/icons/arrow-right.png"} />
      </button>
    ),
    dots: false,
    centerMode: false,
    focusOnSelect: true,
  };
  return (
    <div className="col-lg-6 col-md-7 product-images">
      <div className="d-flex justify-content-between position-relative">
        <div className="main-image">
          <Slider {...mainImgOps}>
            {images.forEach((img, index) => {
              <div className="img-item">
                <img src={URL + img} />
              </div>;
            })}
          </Slider>
        </div>
        <div className="nav-image">
          <Slider {...navImgOps}>
            {images.forEach((img, index) => {
              <div
                classname="img-item"
                style={{ backgroundImage: "url(" + URL + img + ")" }}
              />;
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
