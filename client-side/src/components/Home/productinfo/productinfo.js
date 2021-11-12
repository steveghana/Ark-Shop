import React, {useEffect, useState, useRef, useContext} from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import {Close,ExpandMore} from "@material-ui/icons/";
import { useDispatch } from "react-redux";
import {Select, MenuItem, FormControl, InputLabel} from "@material-ui/core"
import "./select.css";
import { UIcontext } from "../uicontext";
import Infomobile from "./infomobile/Info";
import { addtoCart } from "../../../Redux/actions/actions";
import useStyle from "./style"
function Productinfo() {
  const {state,increment,productinformation,setproductinformation,selectedItem,setdeletebtn,setimageindex, imageindex, mobileinfo, setmobileinfo} = useContext(UIcontext)
  const {
    id,
    name,
    sub,
    header,
    color,
    price,
    description,
    index,
    rating,
    numOfReviews,
    relatedimages,
    sizes,
    specifications,
    ProductColor,
    ProductCode,
    background,
  } = state;
const classes = useStyle()
console.log(sizes);
const [qty, setqty] = useState(1)
const [size, setsize] = useState("")
  const dispatch = useDispatch();
  const counter = useRef('')


  const handlecart = (item, qty) => {
    dispatch(addtoCart(item, qty));
    console.log(item)
  };


 const handleimages = (item, e) => {
setimageindex(item)
 e.target.style.border = `2px solid ${color}`
};


const removeborderAfterClick = ()=>{
  let images = document.querySelectorAll(".small-imgs")
  images.forEach(image=> image.style.border = "none")
}
 const handleCounter=()=>{
   const target = Number(counter.current.getAttribute("data-target"))
   const speed = 25
let numinContent = Number(counter.current.innerText)
const increment = target / speed
console.log(increment, target)
if( numinContent < target){
  counter.current.innerText = numinContent + increment
  setTimeout(handleCounter, 50);
}
else{
  
  counter.current.innerText = target.toFixed(2)
}

 }
 useEffect(()=>{
  increment &&  handleCounter()

 },[increment])
  return (

<>
<Infomobile mobileinfo={mobileinfo} setmobileinfo={setmobileinfo} color={color} index={index} background={background} specifications={specifications} description={description} header={header}/>
  
    <div
      className={
        productinformation ? "price-and-about stretch" : "price-and-about"
      }
      style={{ color, filter : mobileinfo ? "blur(30px)" : "none", pointerEvents : mobileinfo ? "none" : "all"}}
    >
      <div className="product-category" >
        {relatedimages.length &&
          relatedimages.map((img, index) => (
            <>
            
            <img src={img} key={index} alt={name}onClick={(e) => {
                removeborderAfterClick()
                handleimages(index, e)
            }}className="small-imgs"/>
            
            </>
          ))}
      </div>

      <div className="product-description">
        <div
          className="price-and-currency"
          style={{opacity: productinformation && "0",color: index === 2 ? background : null}}> $ 
          <span className="price" data-target={price}  ref={counter}>{!increment && '0'}</span>
        </div>
        <div className="orderbutton">
          <div
            className="select-size"
            >
              <FormControl className={classes.formControl}  style={{ border: `2px solid ${color}`, opacity: productinformation && "0", backgroundColor: index === 0 && background}}>
                <InputLabel>Size</InputLabel>
                <Select value={size} onChange={(e)=>setsize(e.target.value)}>
                  {sizes.length && sizes.map((size, i)=>(
                    <MenuItem value={size} key={i}>{size}</MenuItem>
                  ))}
                </Select>
              </FormControl>
          </div>
          <div
            className="add-to-bag"
            style={{
              backgroundColor: index === 0 ? background : color,
              opacity: productinformation && "0",
              color: index === 0 && color,
              border: `2px solid ${color}`,
            }}
            onClick={(e) => handlecart(id,qty )} >
            Add to Bag
          </div>
        </div>

        <div className={productinformation ? "about-Product fullheight" : "about-Product"}>

          <div className="quickorder" style={{color, borderBottom : `2px solid ${color}`, marginRight : 'auto'}}>Quick Order</div>

          <div className="about-mobile" onClick={()=>setmobileinfo(true)} style={{backgroundColor: index === 0 ? background : color,color: index === 0 ? color : "white"}}>About Product</div>

          
          <div className="about"  style={{backgroundColor: index === 0 ? background : color,color: index === 0 ? color : "white"}}>

          <div className="info-toggle" onClick={(e)=>{ infotoggle(selectedItem, setproductinformation, setdeletebtn)}}>
            <div >About Me</div>
            {!productinformation ? (
              <ExpandMore className="grow"/>
            ) : (
              <Close className="grow"/>)}
          </div>
          <div className="product-header">{header}</div>
          <div className="product-details">{description}</div>
          <div className="product-bio flex-col align-center ">
            {specifications.length && specifications.map((item, index) => <div key={index}>{ item }</div>)}
          </div>
          </div>
        </div>
      </div>
    </div>
</>    
  );
}

export default Productinfo;


function infotoggle(selectedItem, setproductinformation, setdeletebtn) {
  selectedItem.classList.toggle('open');
  if (selectedItem.classList.contains('open')) {
    setproductinformation(true);
    setdeletebtn(false);
  } else {
    setproductinformation(false);
    setdeletebtn(true);
  };
}

