import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserCartcontext } from "../CartAndCheckoutslide/cartcontext";
import { useSelector, useDispatch } from "react-redux";

import "./footer.css";
function Footer({ setcounter, counter, cartempty, setcartComplete }) {
  const dispatch = useDispatch();
  // const {setshippinComplete, shippinComplete} = useContext(UserCartcontext)
  const handleincrement = () => {
    setcounter(counter + 1);
    !cartempty && setcartComplete(true);
  };
  let authcomplete = () => {
    if (!cartempty) {
      return "none";
    }
    return "all";
  };
  let colorChange = () => {
    if (!cartempty) {
      return "grwy";
    }
    return null;
  };

  return (
    counter !== 4 && (
      <div className="footer-bar">
        <Link to="/home" style={{ textDecoration: "none" }}>
          {" "}
          <div className="back">Back to Shop</div>
        </Link>
        <div
          onClick={handleincrement}
          style={{
            display: counter > 0 ? "none" : null,
            pointerEvents: authcomplete(),
            backgroundColor: colorChange(),
          }}
          className="continue"
        >
          Continue
        </div>
      </div>
    )
  );
}

export default Footer;
