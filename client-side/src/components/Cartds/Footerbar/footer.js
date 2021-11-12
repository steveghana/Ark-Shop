import React,{useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import "./footer.css"
function Footer({setcounter, counter, cartempty, setcartComplete}) {

    const handleincrement= ()=>{
setcounter(counter+ 1)
!cartempty && setcartComplete(true)
    }

    return (
        counter !== 3 && 
        <div className="footer-bar">
           <Link to="/" style={{textDecoration: 'none'}} > <div  className="back">Back to Shop</div></Link>
            <div onClick={handleincrement} style={{pointerEvents : !cartempty ?  "none"  : "all", backgroundColor : !cartempty ? "gray" : null}} className="continue">Continue</div>
        </div>
    )
}

export default Footer
