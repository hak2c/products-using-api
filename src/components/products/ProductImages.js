import { useState } from "react";
import Slider from "react-slick";

const URL = "https://fake-server-products-api.herokuapp.com/";

export default function ProductImages({ images }) {
  const [mainSlider, setMainSlider] = useState(null);
  const [navSlider, setNavSlider] = useState(null);

  const mainImgOps = {
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          prevArrow: (
            <button type="button" className="slick-prev">
              <img src={URL + "images/icons/arrow-left.png"} />
            </button>
          ),
          nextArrow: (
            <button type="button" className="slick-next">
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
    arrows: true,
    prevArrow: (
      <button type="button" className="slick-prev">
        <img src={URL + "images/icons/arrow-left.png"} />
      </button>
    ),
    nextArrow: (
      <button type="button" className="slick-next">
        <img src={URL + "images/icons/arrow-right.png"} />
      </button>
    ),
    dots: false,
    centerMode: false,
    focusOnSelect: true,
  };
  return (
    <div className="col-lg-6 col-md-7 product__images">
      <div className="d-flex justify-content-between position-relative">
        <div className="product__images--main-images">
          <Slider
            {...mainImgOps}
            asNavFor={navSlider}
            ref={(slider) => setMainSlider(slider)}
          >
            {images.map((img, index) => (
              <div key={index} className="img-item">
                <img src={URL + img} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="product__images--nav-images">
          <Slider
            asNavFor={mainSlider}
            ref={(slider) => setNavSlider(slider)}
            {...navImgOps}
          >
            {images.map((img, index) => (
              <div key={index} className="img-item">
                <img src={URL + img} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
/*<Slider {...mainImgOps}>
{images.forEach((img, index) => {
  <div className="img-item">
    <img src={URL + img} />
  </div>;
})}
</Slider>
<Slider {...navImgOps}>
            {images.forEach((img, index) => {
              <div
                classname="img-item"
                style={{ backgroundImage: "url(" + URL + img + ")" }}
              />;
            })}
          </Slider>*/
