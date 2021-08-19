import { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import * as Unicons from "@iconscout/react-unicons";

import { API_URL } from "../Utils";

import ProductContent from "../collections/ProductContent";

const LIMIT_PRODUCTS = 8;

export default function NewestArrivals() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(
        API_URL +
          "products?_limit=" +
          LIMIT_PRODUCTS +
          "&_sort=id&_order=desc&available=true"
      )
      .then(function (response) {
        setProducts(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
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
      <Unicons.UilAngleLeft size="45" color="#A7A7A7" />
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
      <Unicons.UilAngleRight size="45" color="#A7A7A7" />
    </button>
  );
  let slickOpts = {
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
        },
      },
    ],
  };

  return (
    <section className="new__arrivals">
      <div className="container">
        <div className="section-title text-center">
          <h2>Newest Arrivals</h2>
        </div>
        <div className="row">
          <Slider {...slickOpts} className="col-12 new__arrivals--list">
            {products.map((product) => (
              <ProductContent key={product.id} product={product} colClass="" />
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
