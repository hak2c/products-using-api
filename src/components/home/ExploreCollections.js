import image1 from "../../images/testament__hero-iwto-1.jpg";
import image2 from "../../images/testament__hero-block-5.jpg";
import image3 from "../../images/testament__hero-gallery-3.jpg";
import image4 from "../../images/testament__hero-gallery-4.jpg";
import { memo } from "react";

function ExploreCollections() {
  return (
    <section className="explore__collections">
      <div className="container">
        <div className="section-title text-center">
          <h2>Testament, a theme built for Fashion</h2>
          <div className="section-pretext text-center mx-auto mt-3">
            <p>
              We make beautiful, high quality goods that are designed especially
              for you. Discover our story and meet the people that make our
              brand what it is.
            </p>
          </div>
        </div>
        <div
          className="
          d-flex
          flex-md-wrap
          justify-content-md-center
          align-items-center
          explore__collections--content
        "
        >
          <img
            className="item explore__collections--first-line"
            src={image1}
            alt=""
          />
          <img
            className="item explore__collections--first-line"
            src={image2}
            alt=""
          />
          <div className="item explore__collections--second-line p-4 ps-md-0">
            <h3 className="mb-3">Explore our collections</h3>
            <p className="mb-3">
              We are proud to present the best products From the worlds most
              talented designers of high quality goods.
            </p>
            <a href="#">Shop Collections</a>
          </div>
          <img
            className="item explore__collections--second-line"
            src={image3}
            alt=""
          />
          <img
            className="item explore__collections--second-line"
            src={image4}
            alt=""
          />
        </div>
      </div>
    </section>
  );
}
export default memo(ExploreCollections);
