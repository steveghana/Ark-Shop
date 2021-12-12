import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { TextField, Grid, Button } from "@material-ui/core";
import { UserCartcontext } from "../cartcontext";
import { shippingInfo } from "../../../../Redux/actions/actions";
import "./shipping.css";
function Shipping({ setshippinComplete }) {
  const dispatch = useDispatch();
  const { counter, setcounter } = useContext(UserCartcontext);
  const existingShippingData = JSON.parse(
    localStorage.getItem("usershippingInfo")
  );

  const [shippinginfo, setshippinginfo] = useState({
    fullname: existingShippingData?.fullname || "",
    country: existingShippingData?.country || "",
    City: existingShippingData?.City || "",
    postal: existingShippingData?.postal || "",
    State: existingShippingData?.State || "",
    Address: existingShippingData?.Address || "",
  });
  const [err, seterr] = useState("");
  const handlechange = (e) => {
    setshippinginfo({ ...shippinginfo, [e.target.name]: e.target.value });
  };
  const handleShippingCompleted = (e) => {
    if (shippinginfo.fullname === "") {
      seterr("Enter your full name");
    } else if (shippinginfo.country === "") {
      seterr("Enter your country");
    } else if (shippinginfo.City === "") {
      seterr("Enter your city");
    } else if (shippinginfo.postal === "") {
      seterr("Enter your postal code");
    } else if (shippinginfo.State === "") {
      seterr("Enter your state ");
    } else if (shippinginfo.Address === "") {
      seterr("Enter your address");
    } else {
      dispatch(shippingInfo(shippinginfo));
      setcounter(counter + 1);
    }
  };
  return (
    <div className="shipping-container">
      <div className="shipping_wrapper">
        <Grid lg={12} md={12} className="second-name">
          <div className="second-name-description"> FullName </div>
          <TextField
            name="fullname"
            variant="outlined"
            label="fullname"
            fullWidth
            value={shippinginfo.fullname}
            onChange={handlechange}
          />
        </Grid>

        <Grid lg={12} md={12} className="country">
          <div className="country-name-description"> Country </div>
          <TextField
            name="country"
            variant="outlined"
            label="country"
            fullWidth
            value={shippinginfo.country}
            onChange={handlechange}
          />
        </Grid>
        <Grid lg={12} md={12} className="city">
          <div className="city-description"> City </div>
          <TextField
            name="City"
            variant="outlined"
            label="City"
            fullWidth
            value={shippinginfo.City}
            onChange={handlechange}
          />
        </Grid>
        <Grid lg={12} md={12} className="zip-code">
          <div className="zip-description"> Postal Code </div>
          <TextField
            name="postal"
            variant="outlined"
            label="postal"
            fullWidth
            value={shippinginfo.postal}
            onChange={handlechange}
          />
        </Grid>

        <Grid lg={12} md={12} className="state">
          <div className="state-name-description"> State </div>
          <TextField
            name="State"
            variant="outlined"
            label="State"
            fullWidth
            value={shippinginfo.State}
            onChange={handlechange}
          />
        </Grid>
        <Grid lg={12} md={12} className="address">
          <div className="address-description"> Address </div>
          <TextField
            name="Address"
            variant="outlined"
            label="Address"
            fullWidth
            value={shippinginfo.Address}
            onChange={handlechange}
          />
        </Grid>
        <div className="erro_message">{err}</div>
        <Button
          fullWidth
          onClick={handleShippingCompleted}
          variant="contained"
          color="secondary"
        >
          Continue
        </Button>
      </div>
    </div>
  );
}

export default Shipping;
