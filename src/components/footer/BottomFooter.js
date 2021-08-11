import fbSrc from "../../images/icons/facebook.png";
import instagramSrc from "../../images/icons/instagram.png";
import twitterSrc from "../../images/icons/twitter.png";
import linkedinSrc from "../../images/icons/linkedin.png";

import visa from "../../images/partners/visa.jpg";
import mastercard from "../../images/partners/mastercard.jpg";
import americanExpress from "../../images/partners/american-express.jpg";
import paypal from "../../images/partners/paypal.jpg";
import dinersClub from "../../images/partners/diners-club.jpg";
import discover from "../../images/partners/discover.jpg";

export default function BottomFooter() {
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
            <img src={fbSrc} alt="facebook" />
          </a>
          <a href="#">
            <img src={instagramSrc} alt="instagram" />
          </a>
          <a href="#">
            <img src={twitterSrc} alt="twitter" />
          </a>
          <a href="#">
            <img src={linkedinSrc} alt="linkedin" />
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
