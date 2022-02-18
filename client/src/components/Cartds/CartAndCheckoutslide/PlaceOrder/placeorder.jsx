import React, { useContext, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { CheckCircleOutlineOutlined, WarningRounded } from "@material-ui/icons";

import { useDispatch, useSelector } from "react-redux";
import { placeOrder } from "../../../../Redux/actions/actions";
import "./order.css";
function Placeorder() {
  const orderDetails = useSelector((state) => state);
  const [paypalReady, setpaypalReady] = useState(false);
  const { id } = useParams();
  const dispatch = useDispatch();
  const existingorder = orderDetails?.Orderplaced?.order?.existingorder;
  const addpaypalScript = () => {
    const { data } = axios.get(
      `https://arkshop12.herokuapp.com/api/config/paypal`
    );
    //TO DO : create the paypal script
    const script = document.createElement("script");
    script.src = "paypalurl/";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => {
      setpaypalReady(true);
    };
    document.body.appendChild(script);
  };
  React.useEffect(() => {
    dispatch(placeOrder(id));
  }, [id, dispatch]);
  return (
    <div style={{ padding: "1rem" }} className="placeOrder_wrapper">
      <div className="info_wrapper">
        <div
          style={{ padding: "0 1rem", fontWeight: "bolder" }}
          className="orderId"
        >
          Order Id : {id}
        </div>

        <div className="shipping_info">
          <div className="info_head">Shipping</div>
          <div className="info">
            Name: {existingorder?.shippingAddress?.fullname}
          </div>
          <div className="info">
            Address: {existingorder?.shippingAddress?.Address}
          </div>
          {existingorder?.isDelivered ? (
            <div
              style={{ backgroundColor: "rgba(154, 205, 50,0.2)" }}
              className="alert"
            >
              <CheckCircleOutlineOutlined style={{ color: "yellowgreen" }} />
              Delivered
            </div>
          ) : (
            <div
              style={{ backgroundColor: "rgba(255, 99, 71, 0.2)" }}
              className="alert"
            >
              <WarningRounded color="secondary" />
              Not Delivered
            </div>
          )}
        </div>
        <div className="payment_method">
          <div className="info_head">Payment Method</div>
          <div className="info">
            Method: <span>{existingorder?.paymentMethod}</span>{" "}
          </div>
          {existingorder?.isPaid ? (
            <div
              style={{ backgroundColor: "rgba(154, 205, 50,0.2)" }}
              className="alert"
            >
              <CheckCircleOutlineOutlined style={{ color: "yellowgreen" }} />
              Paid
            </div>
          ) : (
            <div
              style={{ backgroundColor: "rgba(255, 99, 71, 0.2)" }}
              className="alert"
            >
              <WarningRounded color="secondary" />
              Not Paid
            </div>
          )}
        </div>
        <div className="info_head order_items_info_head">Order Items</div>
        <div className="order_items">
          {existingorder?.orderItems?.map((item) => (
            <div className="order_items_cart" key={item.id}>
              <div className="order_items_cart-item">
                <div className="img">
                  <img src={item.image} alt="order_items_cart-img" />
                </div>
                <div className="order_items_cart-description items-start">
                  <div
                    style={{ fontSize: "1.5rem", fontWeight: "bolder" }}
                    className=""
                  >
                    {`${item.name} ${item.sub}`}
                  </div>

                  <div className="colordescription">{item.productColor}</div>
                </div>

                <div className="total-item_calc">
                  {`${item.qty} x $${item.price} = $${Number(
                    item.qty * item.price
                  ).toFixed(2)}`}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="ordercalcs_wrapper">
        <h2>Order Summary</h2>
        <div className="ordercalcs_items">
          <div className="key">Items total price</div>
          <div className="ordercalcs_amount">
            ${Number(existingorder?.itemsPrice).toFixed(2)}
          </div>
        </div>
        <div className="ordercalcs_items">
          <div className="key">Shipping</div>
          <div className="ordercalcs_amount">
            ${Number(existingorder?.shippingPrice).toFixed(2)}
          </div>
        </div>
        <div className="ordercalcs_items">
          <div className="key">Tax</div>
          <div className="ordercalcs_amount">
            ${Number(existingorder?.taxprice)}
          </div>
        </div>

        <div className="ordercalcs_items ordercalcs_total">
          <div className="key">Order Total</div>
          <div className="ordercalcs_amount">
            ${Number(existingorder?.totalPrice)}
          </div>
        </div>
        <div>
          Paypal not activated for demo purposes, return to{" "}
          <a href="/home">homepage</a> to explore more
        </div>
        {/* <Button onClick={handlePlaceOrder} fullWidth variant='contained' color='secondary'>Place Order</Button> */}
        {/* {orderCreated?.loading && <CircularProgress />} */}
        {/* {orderCreated?.error && <Typography variant='body1' color='secondary'>{orderCreated?.error}</Typography>} */}
      </div>
    </div>
  );
}

export default Placeorder;
