import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductinfo, getallproducts } from "./Redux/actions/actions";
import Home from "./components/Home/home";
import Placeorder from "./components/Cartds/CartAndCheckoutslide/PlaceOrder/placeorder";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./components/Cartds/Cards";
import Men from "./components/Men/Men";
import { UIcontext } from "./components/Home/uicontext";
// import Auth from "./components/Home/Auth/user";
import "./root.css";
import Done from "./components/Cartds/CartAndCheckoutslide/Done/done";
function App() {
  const [background, setbackground] = useState(null);
  const initialstate = {
    id: "",
    name: "",
    sub: "",
    header: "",
    color: "",
    price: "",
    countInStock: "",
    description: "",
    ProductColor: "",
    background: "",
    numOfReviews: "",
    image: "",
    productCode: "",
    rating: "",
    relatedimages: "",
    sizes: "",
    specifications: "",
    index: "",
  };
  const [state, setState] = useState(initialstate);
  const [productinformation, setproductinformation] = useState(false);
  const [increment, setincrement] = useState(false);

  const [deletebtn, setdeletebtn] = useState(null);
  const [selectedItem, setSelectedItem] = useState(null);
  const [revert, setrevert] = useState(false);
  const [imageindex, setimageindex] = useState(0);
  const [mobileinfo, setmobileinfo] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProductinfo());
    // dispatch(getallproducts());
  }, [dispatch]);

  return (
    <UIcontext.Provider
      value={{
        state,
        setState,
        background,
        setbackground,
        productinformation,
        setproductinformation,
        increment,
        setincrement,
        deletebtn,
        setdeletebtn,
        selectedItem,
        setSelectedItem,
        revert,
        setrevert,
        imageindex,
        setimageindex,
        mobileinfo,
        setmobileinfo,
      }}
    >
      <div className="home_wrapper">
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/cart" element={<Cards />}></Route>
            <Route exact path="/men" element={<Men />}></Route>
            <Route exact path="/done" element={<Done />}></Route>
            <Route path="/order/:id" element={<Placeorder />}></Route>
          </Routes>
        </Router>
      </div>
    </UIcontext.Provider>
  );
}

export default App;
