import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getProductinfo } from "./Redux/actions/actions";
import Home from "./components/Home/home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cards from "./components/Cartds/Cards";
import { Usercontext } from "./components/Cartds/CartAndCheckoutslide/cartcontext";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductinfo());
  }, [dispatch]);


  return (
    <>
    <Router>
       <Route path="/" exact >
            <Home/>
         </Route>
      <Switch>
        <Route path="/cart">
          <Cards/>
        </Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
