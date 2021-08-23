import { memo } from "react";
import { Carousel } from "react-bootstrap";

import image3 from "../../images/slides/slide-3.jpg";

function ContentBanner() {
  return (
    <section className="content__banner d-none d-md-block">
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="First slide" />
          <Carousel.Caption>
            <h1 className="caption-title pb-2 pb-md-3">New Prints</h1>
            <p className="caption-text pb-3 pb-md-5">
              Shop our exclusive Dress Range
            </p>
            <a
              className="d-inline-block"
              href="collection/3/rompers-and-playsuits"
            >
              Explore
            </a>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
}
export default memo(ContentBanner);
