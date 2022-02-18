import React, { useRef, useState, useContext } from "react";
import { UIcontext } from "./uicontext";
// import Signup from "./Auth/Signup";
import Homepage from "./Homepage/homepage";
function Home() {
  const cursor = useRef(null);
  const { background } = useContext(UIcontext);
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
            <Homepage />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
