import { memo } from "react";
import { Accordion } from "react-bootstrap";

function CartInformation() {
  return (
    <div className="col-md-6 cart-infor">
      <div className="cart-infor__note">
        <Accordion defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header className="noteBtn mb-2">
              Leave a note with your order
            </Accordion.Header>
            <Accordion.Body className="noteTextarea">
              <textarea className="form-control" rows="5"></textarea>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="cart-infor__free-shipping mb-4">
        <div className="text-center free-shipping">
          <p className="mb-3">
            You are only $124.01 away from Free Domestic Shipping!
          </p>
          <small>(Excludes International)</small>
        </div>
      </div>
    </div>
  );
}

export default memo(CartInformation);
