import React, { useEffect, useRef, useState } from 'react'
import Cart from './Cart/cart'
import Checkout from './checkout/checkout'
import Done from './Done/done'
import Shipping from './shipping/shipping'
import "./slide.css"
import { Usercontext } from './cartcontext'
function Slide({ setprice, counter, setcounter, setcartempty, setdone, checkoutComplete, setcheckoutComplete, setshippinComplete, shippinComplete, cartcounter, setcartcounter }) {
    const item = useRef(null)
    const slider = useRef(null)
    const [width, setwidth] = useState(null)
    const [cartitem, setcartitem] = useState('')
    useEffect(() => {
        sliding(setwidth, item, counter, setcounter, slider, width)
   
    }, [counter, width, setcounter])
    return (
        <div className="slide-container">
            <Usercontext.Provider value={setcartitem,cartitem}>

                <div className="individual-slide" ref={slider}>

                    <div className="slide1" ref={item} style={{ display: counter > 0 && "none" }}>
                        <Cart setprice={setprice} setcartempty={setcartempty} carcounter={cartcounter} setcartcounter={setcartcounter} />
                    </div>
                    <div className="slide2" style={{ display: counter > 1 && "none" }}>
                        <Checkout checkoutComplete={checkoutComplete} setcheckoutComplete={setcheckoutComplete} />
                    </div>
                    <div className="slide3" style={{ display: counter > 2 && "none" }}>
                        <Shipping shippinComplete={shippinComplete} setshippinComplete={setshippinComplete} />
                    </div>
                    <div className="slide4">
                        <Done setdone={setdone} />
                    </div>
                </div>
            </Usercontext.Provider>

        </div>
    )
}


export default Slide
function sliding(setwidth, item, counter, setcounter, slider, width) {
    setwidth(item.current.offsetWidth)
    counter > 3 && setcounter(3)
    console.log(counter)
    slider.current.style.transform = `translateX(-${width * counter}px)`
}

