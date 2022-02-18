import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { UserCartcontext } from "../cartcontext";
import { shippingMethod } from "../../../../Redux/actions/actions";
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
} from "@material-ui/core";
import "./checkout.css";
function Checkout() {
  const dispatch = useDispatch();
  const { counter, setcounter } = useContext(UserCartcontext);
  const [paymentMethod, setpaymentMethod] = useState("Paypal");
  const handleChange = (e) => setpaymentMethod(e.target.value);
  const handlepaymentsubmit = () => {
    dispatch(shippingMethod(paymentMethod));
    setcounter(counter + 1);
  };
  return (
    <div className="checkout-box">
      <div className="checkout-container">
        <div className="cardnumber-head">Select a payment method</div>
        <div className="number-container">
          <FormControl>
            <FormLabel component="legend"> Payment </FormLabel>
            <RadioGroup
              row
              aria-label="Payment"
              name="Payment"
              onChange={handleChange}
            >
              <FormControlLabel
                value="Paypal"
                control={<Radio color="secondary" />}
                label="Paypal"
              />
              <FormControlLabel
                value="Stripe"
                control={<Radio color="secondary" />}
                label="Stripe"
              />
            </RadioGroup>
          </FormControl>
        </div>

        <div className="money-vendors-container">
          <Button
            onClick={handlepaymentsubmit}
            variant="contained"
            color="secondary"
            fullWidth
          >
            Continue
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
