import Breadcrumbs from "../Breadcrumbs";
import CollectionsList from "../CollectionsList";

import aboutImg from "../../assets/images/new-arrivals_800x.jpg";

export default function AboutPage() {
  return (
    <>
      <main>
        <div className="page-image">
          <img src={aboutImg} className="d-block w-100" alt="" />
        </div>
        <div className="container">
          <Breadcrumbs location="About Us" />
          <div className="page-title">
            <h3>About Us</h3>
          </div>

          <div className="row">
            <div className="col-12 col-lg-8 col-md-10 mx-auto py-5">
              <p className="mb-3">
                Our story began in 2001 in a small studio in the middle of
                nowhere. With only one desk and next to no free time, our brand
                was born. Our passion for unique design and collaboration
                brought our vision, and products, to life.
              </p>
              <p className="mb-3">
                &nbsp;Our products bring together the finest materials and
                stunning design to create something very special. We believe in
                quality, care, and creating unique products that everyone can
                enjoy. Colorful, creative, and inspired by what we see everyday,
                each product represents what we love about the world we live in.
                We hope they’ll inspire you too.
              </p>
            </div>
          </div>
        </div>
      </main>
      <CollectionsList />
    </>
  );
}
