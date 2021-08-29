import { memo } from "react";
import { Carousel } from "react-bootstrap";

import image1 from "../../../assets/images/slides/slide-1.jpg";
import image2 from "../../../assets/images/slides/slide-2.jpg";

function MainBanner() {
  return (
    <section className="main__banner">
      <Carousel interval={3000} controls={false} indicators={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption>
            <h1 className="caption-title pb-2 pb-md-3">Fresh New Arrivals</h1>
            <p className="caption-text pb-3 pb-md-5">
              Explore the latest range
            </p>
            <a className="d-inline-block" href="collection/1/dresses">
              Shop now!
            </a>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
          <Carousel.Caption>
            <h1 className="caption-title pb-2 pb-md-3">Bold New Styles</h1>
            <p className="caption-text pb-3 pb-md-5">
              Crushing on this seasons new colors
            </p>
            <a className="d-inline-block" href="collection/2/tops">
              Shop Rust
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
export default memo(MainBanner);
