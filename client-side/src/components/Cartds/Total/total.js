import React, {useRef} from 'react'
import { useSelector } from 'react-redux';
import './total.css'
function Total({counter, cartComplete, setitemSum}) {
    const data = useSelector((state) => state.cart.cartItems);

const getCartTotal=()=>{
    return data
    .reduce((price, item) => price + Number( item.price * item.qty), 0)
    .toFixed(2);
}
const total = useRef(0)
cartComplete && setitemSum(total.current.textContent)
    return (
        counter !== 3 &&
        <div className='total'>
            $ <span ref={total} >{getCartTotal()}</span>
        </div>
    )
}

export default Total
