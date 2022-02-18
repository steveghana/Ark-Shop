import React, { useState } from "react";
import Slide from "./CartAndCheckoutslide/slide";
import Footer from "./Footerbar/footer";
import Select from "./selectionbar/select";
import { UserCartcontext } from "./CartAndCheckoutslide/cartcontext";
import Total from "./Total/total";
import "./cards.css";
function Cards() {
  const [counter, setcounter] = useState(0);
  const [cartempty, setcartempty] = useState(false);
  const [cartComplete, setcartComplete] = useState(false);
  const [itemSum, setitemSum] = useState(null);
  const [checkoutComplete, setcheckoutComplete] = useState(false);
  const [shippinComplete, setshippinComplete] = useState(false);
  const [done, setdone] = useState(false);
  const [cartcounter, setcartcounter] = useState(1);
  const [price, setprice] = useState(0);

  return (
    <UserCartcontext.Provider
      value={{ setshippinComplete, shippinComplete, counter, setcounter }}
    >
      <div className="cards-container">
        <Select counter={counter} />

        <Slide
          setprice={setprice}
          counter={counter}
          setcounter={setcounter}
          setcartempty={setcartempty}
          setdone={setdone}
          checkoutComplete={checkoutComplete}
          setcheckoutComplete={setcheckoutComplete}
          setshippinComplete={setshippinComplete}
          shippinComplete={shippinComplete}
          cartcounter={cartcounter}
          setcartcounter={setcartcounter}
        />
        <Total
          price={price}
          counter={counter}
          done={done}
          setitemSum={setitemSum}
          cartComplete={cartComplete}
        />

        <Footer
          setcounter={setcounter}
          counter={counter}
          cartempty={cartempty}
          done={done}
          setcartComplete={setcartComplete}
        />
      </div>
    </UserCartcontext.Provider>
  );
}

export default Cards;
