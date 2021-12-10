import React from "react";
import "./barSelect.css";
function Select({ counter }) {
  return (
    <div className="appbar">
      <div
        style={{ borderBottom: counter === 0 && "2px solid red" }}
        className="cartpage"
      >
        01: <span>Cart</span>
      </div>
      <div
        style={{ borderBottom: counter === 1 && "2px solid red" }}
        className="checkout"
      >
        02: <span>Shipping</span>
      </div>
      <div
        style={{ borderBottom: counter === 2 && "2px solid red" }}
        className="shipping"
      >
        03: <span>Checkout</span>
      </div>
      <div
        style={{ borderBottom: counter === 3 && "2px solid red" }}
        className="placeorder"
      >
        04: <span>Place Order</span>
      </div>
      <div
        style={{ borderBottom: counter === 4 && "2px solid red" }}
        className="done"
      >
        05: <span>Done</span>
      </div>
    </div>
  );
}

export default Select;
