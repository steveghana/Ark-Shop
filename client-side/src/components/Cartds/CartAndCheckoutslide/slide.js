import React, { useEffect, useRef, useState } from "react";
import Cart from "./Cart/cart";
import { useDispatch } from "react-redux";
import Checkout from "./checkout/checkout";
import Done from "./Done/done";
import Shipping from "./shipping/shipping";
import "./slide.css";
import Order from "./PlaceOrder/Order";
function Slide({
  setprice,
  counter,
  setcounter,
  setcartempty,
  setdone,
  checkoutComplete,
  setcheckoutComplete,
  setshippinComplete,
  shippinComplete,
  cartcounter,
  setcartcounter,
}) {
  const item = useRef(null);
  const slider = useRef(null);
  const [paymentInformation, setpaymentInformation] = useState({
    shippingAddress: "",
    paymentMethod: "",
    cartitemsInfo: "",
  });

  const [width, setwidth] = useState(null);
  const [cartitem, setcartitem] = useState("");
  useEffect(() => {
    sliding(setwidth, item, counter, setcounter, slider, width);
  }, [counter, width, setcounter]);

  return (
    <div className="cart_slide-container">
      <div className="individual-slide" ref={slider}>
        <div
          className="slide1"
          ref={item}
          style={{ display: counter > 0 && "none" }}
        >
          <Cart
            setprice={setprice}
            setcartempty={setcartempty}
            carcounter={cartcounter}
            setcartcounter={setcartcounter}
          />
        </div>
        <div className="slide2" style={{ display: counter > 1 && "none" }}>
          <Shipping
            shippinComplete={shippinComplete}
            setshippinComplete={setshippinComplete}
          />
        </div>
        <div className="slide3" style={{ display: counter > 2 && "none" }}>
          <Checkout
            checkoutComplete={checkoutComplete}
            setcheckoutComplete={setcheckoutComplete}
          />
        </div>
        <div className="slide4" style={{ display: counter > 3 && "none" }}>
          <Order />
        </div>
        <div className="slide5">{/* <Done setdone={setdone} /> */}</div>
      </div>
    </div>
  );
}

export default Slide;
function sliding(setwidth, item, counter, setcounter, slider, width) {
  setwidth(item.current.getBoundingClientRect().width);
  counter > 3 && setcounter(3);
  slider.current.style.transform = `translateX(-${width * counter}px)`;
}
