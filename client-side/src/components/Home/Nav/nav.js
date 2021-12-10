import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  useMediaQuery,
  Toolbar,
  Button,
  Avatar,
  Typography,
} from "@material-ui/core";
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
  const [showuserbox, setshowuserbox] = useState(false)
  const [user, setuser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const classes = useStyles();
  const data = useSelector((state) => state.cart.cartItems);
  const isMobile = useMediaQuery("(max-width:800px)");
  const handlelogout = () => {
    setuser(null);
    dispatch(logout());
  };
  const showDialog = () => setshowuserbox(prevValue => !prevValue)
  return (
    <nav className="main-nav">
      {isMobile && <Menu />}
      <div
        className="gender"
        style={{ color: productinformation ? color : black }}
      >
        <Link
          style={{ color: black ? "black" : "white", textDecoration: "none" }}
          to={`${black ? "/" : "/men"}`}
        >
          <div className="men-toggle">
            <div className="toggle2">.</div>
            <div className="men">{black ? "Home" : "Shop"}</div>
          </div>
        </Link>
      </div>

      <div
        className="arch"
        style={{ color: productinformation ? color : black }}
      >
        arch
      </div>
      <div
        className="contact-bagnum"
        style={{ color: productinformation ? color : black }}
      >
        <Toolbar className={classes.Toolbar}>
          {user && (
            <div className='userinfo'>
              <div onClick={showDialog} className="avatar_drop">
                <Avatar
                  className={classes.avatar}
                  alt={user.existinguser.firstName}
                // src={}
                ></Avatar>
                <ArrowDropDown />
              </div>
              {
                showuserbox ? (
                  <div className="dialogbox">
                    <Typography>{`${user?.existinguser?.firstName} ${user?.existinguser?.secondName}`}</Typography>
                    <Button component={Link} to="/" variant="contained" color="primary" onClick={handlelogout}>
                      Logout
                    </Button>
                  </div>
                ) : null
              }
            </div>

          )}
        </Toolbar>
        <p className="contact" style={{ display: isMobile && "none" }}>
          CONTACT
        </p>
        <Link style={{ color: "white", textDecoration: "none" }} to="/cart">
          <p
            className="bag"
            style={{ color: productinformation ? color : black }}
          >
            BAG
          </p>
        </Link>
        <span
          style={{ color: "white" }}
          className={data.length > 0 ? "bagnum" : null}
        >
          {data.length}
        </span>
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
