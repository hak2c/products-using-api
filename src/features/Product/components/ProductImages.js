import { memo, useState } from "react";
import Slider from "react-slick";
import * as Unicons from "@iconscout/react-unicons";

const { REACT_APP_API_URL } = process.env;

function ProductImages({ images }) {
  const [mainSlider, setMainSlider] = useState(null);
  const [navSlider, setNavSlider] = useState(null);

  const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow" + (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <Unicons.UilAngleLeft size="40" color="#A7A7A7" />
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <Unicons.UilAngleRight size="40" color="#A7A7A7" />
    </button>
  );

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
          prevArrow: <SlickArrowLeft />,
          nextArrow: <SlickArrowRight />,
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
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
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
                <img src={REACT_APP_API_URL + img} />
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
                <img src={REACT_APP_API_URL + img} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
export default memo(ProductImages);
