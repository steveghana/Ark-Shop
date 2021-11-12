import React, { useRef, useState } from "react";
import { UIcontext } from "./uicontext";
import Homepage from "./Homepage/homepage";
function Home() {
  const cursor = useRef(null);
  const [background, setbackground] = useState(null);
  const initialstate = {id:'', name: "", sub: "", header : "", color: "", price: "", countInStock: "", description: "", ProductColor: "", background: "", numOfReviews : '', image : "", productCode : "", rating : "", relatedimages : "", sizes : "", specifications : "", index : ""}
const [state, setState] = useState(initialstate)
  const [productinformation, setproductinformation] = useState(false);
  const [increment, setincrement] = useState(false)
  const [deletebtn, setdeletebtn] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [revert, setrevert] = useState(false);
  const [imageindex, setimageindex]= useState(0)
const [mobileinfo, setmobileinfo] = useState(false)
  const cursorAnimation = (e) => {
    cursor.current.style.top = e.pageY + "px";
    cursor.current.style.left = e.pageX + "px";
  };

  return (
    <div onMouseMove={(e) => background && cursorAnimation(e)}>
      <div ref={cursor} className="cursor">
        +
      </div>
      <div
        className="changing-back"
        style={{ backgroundColor: background }}
        onMouseMove={(e) => background && cursorAnimation(e)}
      >
        <div className="static-backgrond">
          <div className="fullbox">
            <UIcontext.Provider value={{state, setState ,setbackground, productinformation, setproductinformation, increment, setincrement, deletebtn, setdeletebtn, selectedItem, setSelectedItem, revert, setrevert, imageindex, setimageindex, mobileinfo, setmobileinfo}}>
            <Homepage />
            </UIcontext.Provider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
