import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery, Toolbar, Button, Typography } from "@material-ui/core";
import "./nav.css";
import { logout } from "../../../Redux/actions/auth";
import useStyles from "./styles";
import { Link } from "react-router-dom";
import { UIcontext } from "../uicontext";
import { Menu, ArrowDropDown } from "@material-ui/icons";
function Nav({ morebutton, black }) {
  const {
    state,
    deletebtn,
    setdeletebtn,
    setrevert,
    selectedItem,
    productinformation,
    setimageindex,
    increment,
    setincrement,
  } = useContext(UIcontext);
  const { color } = state;
  const [showuserbox, setshowuserbox] = useState(false);
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const classes = useStyles();
  const data = useSelector((state) => state.cart.cartItems);
  const isMobile = useMediaQuery("(max-width:800px)");
  const handlelogout = () => {
    setuser(null);
    dispatch(logout());
  };
  const showDialog = () => setshowuserbox((prevValue) => !prevValue);
  return (
    <nav style={{ position: isMobile ? "fixed" : null }} className="main-nav">
      <div
        className="gender"
        style={{
          color: productinformation ? color : black,
        }}
      >
        <Link
          style={{ textDecoration: "none" }}
          to={`${black ? "/home" : "/men"}`}
        >
          <div
            style={{
              color: productinformation ? color : black,
            }}
            className="men-toggle"
          >
            <div className="toggle2">.</div>
            <div className="men">{black ? "Home" : "Shop"}</div>
          </div>
        </Link>
      </div>

      <div
        className="arch"
        style={{
          color: productinformation ? color : black,
        }}
      >
        ark
      </div>
      <div
        className="contact-bagnum"
        style={{ color: productinformation ? color : black }}
      >
        <Toolbar className={classes.Toolbar}>
          {user && (
            <div className="userinfo">
              <div onClick={showDialog} className="avatar_drop">
                <Typography>{`${user?.result?.firstName}`}</Typography>
                <ArrowDropDown />
              </div>
              {showuserbox ? (
                <div className="dialogbox">
                  <Button
                    component={Link}
                    to="/"
                    variant="outlined"
                    onClick={handlelogout}
                  >
                    Logout
                  </Button>
                </div>
              ) : null}
            </div>
          )}
        </Toolbar>
        <Link
          style={{
            color: "white",
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
          to="/cart"
        >
          <p
            className="bag"
            style={{ color: productinformation ? color : black }}
          >
            BAG
          </p>
          <span
            style={{ color: "white" }}
            className={data.length > 0 ? "bagnum" : null}
          >
            {data.length}
          </span>
        </Link>
        {!black ? (
          <div
            className={deletebtn ? "toggle-delete toggle" : "toggle-delete"}
            onClick={(e) => {
              deletBtnConfig(
                setdeletebtn,
                selectedItem,
                setrevert,
                morebutton,
                setimageindex,
                increment,
                setincrement
              );
            }}
          >
            x
          </div>
        ) : null}
      </div>
    </nav>
  );
}

export default Nav;
function deletBtnConfig(
  setdeletebtn,
  selectedItem,
  setrevert,
  morebutton,
  setimageindex,
  increment,
  setincrement
) {
  setdeletebtn(false);
  selectedItem.classList.remove("grow");
  setrevert(true);
  morebutton.current.classList.remove("move");
  morebutton.current.textContent = "View More";
  setimageindex(0);
  increment && setincrement(false);
}
