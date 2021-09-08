import { memo } from "react";
import { Accordion } from "react-bootstrap";
import { useForm } from "react-hook-form";

function CartInformation() {
  const { register } = useForm();
  return (
    <div className="col-md-6 cart__infor">
      <div className="cart__infor--note">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header className="noteBtn mb-2">
              Leave a note with your order
            </Accordion.Header>
            <Accordion.Body className="noteTextarea">
              <textarea
                className="form-control"
                rows="5"
                {...register("orderNote")}
              ></textarea>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
      <div className="cart__infor--free-shipping mb-4">
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
