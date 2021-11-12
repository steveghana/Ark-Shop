import React from "react";
import "./checkout.css"
function Checkout() {
  return (
    <div className="checkout-box">
      <div className="checkout-container">
        <div className="cardnumber-head">Card Number</div>
        <div className="number-container">
          <div className="number-box">
            <div>0</div>
            <div>0</div>
            <div>0</div>
            <div>0</div>
          </div>
          <div className="number-box">
            <div>0</div>
            <div>0</div>
            <div>0</div>
            <div>0</div>
          </div>
          <div className="number-box">
            <div>0</div>
            <div>0</div>
            <div>0</div>
            <div>0</div>
          </div>
          <div className="number-box">
            <div>0</div>
            <div>0</div>
            <div>0</div>
            <div>0</div>
          </div>
        </div>
<div className="expirydate-cvv">

        <div className="expirydate">
          <div>Expire date</div>
          <div className="rounded">MM/YY</div>
        </div>
        <div className="cvv">
          <div>CVV</div>
          <div className="rounded">000</div>
        </div>
      </div>
      </div>

      <div className="money-vendors-container">
          <div className="vendor">Amazon Express</div>
          <div className="vendor">MasterCard</div>
          <div className="vendor">Visa</div>
      </div>
    </div>
  );
}

export default Checkout;
