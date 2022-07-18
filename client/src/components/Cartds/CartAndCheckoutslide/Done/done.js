import React from "react";
import { useDispatch } from "react-redux";
import { Check } from "@material-ui/icons";
import "./done.css";
import { deleteAllItemFromCart } from "../../../../Redux/actions/actions";
function Done() {
  const dispatch = useDispatch();
  const clearCart = () => {
    dispatch(deleteAllItemFromCart());
  };

  return (
    <div className="ordered-container">
      <div className="bubble-container">
        <div className="bubble">
          <Check style={{ fontSize: "7rem", color: "white" }} />
        </div>
      </div>
      <h1 className="ordered-header">Successfully ordered!</h1>
      <p className="ordered-description">
        And she said we should go to ark <br /> shop and was inspired
      </p>{" "}
      <a
        style={{ textDecoration: "none" }}
        onClick={clearCart}
        href="/"
        className="back-to-shop"
      >
        Back to Shop
      </a>
    </div>
  );
}

export default Done;
