import React,{ useContext} from "react";
import {useSelector} from 'react-redux' 
import { useMediaQuery } from "@material-ui/core";
import "./nav.css";
import {Link} from 'react-router-dom'
import { UIcontext } from "../uicontext";
import { Menu } from "@material-ui/icons";
function Nav({morebutton}) {
  const {state, deletebtn, setdeletebtn, setrevert, selectedItem,productinformation,setimageindex, increment, setincrement, } = useContext(UIcontext)
  const {color} = state
  const data = useSelector((state) => state.cart.cartItems);
   const isMobile = useMediaQuery("(max-width:800px)")
 
  return (
    <nav className="main-nav">
     {isMobile && (
       <Menu/>
     )}
      <div className="gender" style={{color: productinformation && color}}>
        <div className="women-toggle">
          <div className="toggle1">.</div>
          <p className="women">Women</p>
        </div>
        <div className="men-toggle">
          <div className="toggle2">.</div>
          <p className="men">Men</p>
        </div>
      </div>

      <div className="arch" style={{color: productinformation && color}}>arch</div>

      <div className="contact-bagnum" style={{color: productinformation && color}}>
        <p className="contact" style={{display : isMobile && "none"}}>CONTACT</p>
        <Link style={{color:'white', textDecoration : 'none'}} to="/cart" ><p className="bag" style={{ color: productinformation && color}}>BAG</p></Link> 
         <span style={{color: "white"}} className={data.length > 0 ? 'bagnum' : null}>{data.length}</span>
        <div className={deletebtn ? "toggle-delete toggle" : "toggle-delete"} onClick= {(e)=>  {
        deletBtnConfig(setdeletebtn, selectedItem, setrevert, morebutton, setimageindex, increment, setincrement); 
      }} 
          >x</div>
      </div>
    </nav>
  );
}

export default Nav;
function deletBtnConfig(setdeletebtn, selectedItem, setrevert, morebutton, setimageindex, increment, setincrement) {
  setdeletebtn(false);
  selectedItem.classList.remove('grow');
  setrevert(true);
  morebutton.current.classList.remove('move');
  morebutton.current.textContent = 'View More';
  setimageindex(0);
  increment && setincrement(false);
}

