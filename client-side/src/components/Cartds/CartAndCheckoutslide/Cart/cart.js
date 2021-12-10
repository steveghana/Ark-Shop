import React, { useState, useEffect, useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addtoCart, deletitems } from "../../../../Redux/actions/actions";
import "./cart.css";

function Cart({ cart, setcartempty }) {
  const data = useSelector((state) => state.cart.cartItems);
  console.log(data);
  const [id, setid] = useState(null);
  const dispatch = useDispatch();
  const [cartcounter, setcartcounter] = useState(1);
  const handleIncrement = (item, stock) => {
    cartcounter === stock
      ? setcartcounter(stock)
      : setcartcounter(cartcounter + 1);
    setid(item);
  };
  const handleDecrement = (item) => {
    cartcounter === 1 ? setcartcounter(1) : setcartcounter(cartcounter - 1);
    setid(item);
  };
  const handleDelete = (item) => {
    dispatch(deletitems(item));
  };

  useEffect(() => {
    id && dispatch(addtoCart(id, cartcounter));
  }, [id, dispatch, cartcounter]);
  return (
    <>
      {!data.length ? (
        <>
          {setcartempty(false)}
          <div>
            Your Cart is empty{" "}
            <Link to="/home" style={{ textDecoration: "none" }}>
              Back to Shop
            </Link>{" "}
          </div>
        </>
      ) : (
        data.map((item) => (
          <>
            {setcartempty(true)}
            <div className="cart flex-row" key={item.id}>
              <div className="cart-item">
                <div className="img">
                  <img src={item.image} alt="cart-img" />
                </div>
                <div className="cart-description flex-col items-start">
                  <h2 className="cart-title">
                    {item.name}
                    <span className="cart-sub">{item.sub}</span>
                  </h2>
                  <span className="cart-size">
                    size:{" "}
                    {item.sizes.map((item) => (
                      <div className="cart-sizes">{item}</div>
                    ))}
                  </span>

                  <div className="colordescription">{item.productColor}</div>
                  <div className="color">
                    color :{" "}
                    <span
                      className="item-colorDesc"
                      style={{ backgroundColor: item.color }}
                    ></span>
                  </div>
                </div>
                <div className="incrementDecrement">
                  <div
                    onClick={(e) => handleDecrement(item.id)}
                    className="decrement"
                  >
                    -
                  </div>
                  <div
                    type="text"
                    className="number"
                    style={{ color: "black" }}
                  >
                    {item.qty}
                  </div>
                  <div
                    onClick={(e) => handleIncrement(item.id, item.countinstock)}
                    className="increment"
                  >
                    +
                  </div>
                </div>

                <div className="amount">
                  <span className="currency-sign">$</span>
                  <span className="currency-num">
                    {Number(item.price * item.qty).toFixed(2)}
                  </span>
                </div>
                <div
                  className="delete-item"
                  onClick={() => handleDelete(item.id)}
                >
                  x
                </div>
              </div>
            </div>
          </>
        ))
      )}
    </>
  );
}

export default Cart;
