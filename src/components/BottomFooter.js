import * as Unicons from "@iconscout/react-unicons";
import { memo } from "react";

import visa from "../assets/images/partners/visa.jpg";
import mastercard from "../assets/images/partners/mastercard.jpg";
import americanExpress from "../assets/images/partners/american-express.jpg";
import paypal from "../assets/images/partners/paypal.jpg";
import dinersClub from "../assets/images/partners/diners-club.jpg";
import discover from "../assets/images/partners/discover.jpg";

function BottomFooter() {
  return (
    <div className="row align-items-end bottom-footer">
      <div className="col-md-6 d-block d-md-none footer-right">
        <div className="d-flex justify-content-start justify-content-md-end partners">
          <img src={visa} alt="visa" />
          <img src={mastercard} alt="mastercard" />
          <img src={americanExpress} alt="americanExpress" />
          <img src={paypal} alt="paypal" />
          <img src={dinersClub} alt="dinersClub" />
          <img src={discover} alt="discover" />
        </div>
      </div>
      <div className="col-md-6 footer-left">
        <div className="d-flex align-items-center bottom-socials">
          <a href="#">
            <Unicons.UilFacebookF size="16" color="#ffffff" />
          </a>
          <a href="#">
            <Unicons.UilInstagram size="16" color="#ffffff" />
          </a>
          <a href="#">
            <Unicons.UilTwitter size="16" color="#ffffff" />
          </a>
          <a href="#">
            <Unicons.UilLinkedinAlt size="16" color="#ffffff" />
          </a>
        </div>
        <div className="copyright">
          <p>Copyright @ 2021 Testament - Genesis</p>
        </div>
      </div>
      <div className="col-md-6 d-none d-md-block footer-right">
        <div className="d-flex justify-content-start justify-content-md-end partners">
          <img src={visa} alt="visa" />
          <img src={mastercard} alt="mastercard" />
          <img src={americanExpress} alt="americanExpress" />
          <img src={paypal} alt="paypal" />
          <img src={dinersClub} alt="dinersClub" />
          <img src={discover} alt="discover" />
        </div>
      </div>
    </div>
  );
}
export default memo(BottomFooter);
