import React, { useState, useEffect } from 'react'
import { useMediaQuery } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { ArrowRightAlt } from '@material-ui/icons'
import { customslider } from './customSlider'
import axios from 'axios'
import Nav from '../Home/Nav/nav'
import { addtoCart, shoppingdataAddToCart } from '../../Redux/actions/actions'
import Imageslide from './imageslide'
import './men.css'
function Men() {
    const EndPoint = `http://localhost:5000/productsinfo`;
    const dispatch = useDispatch()
    const [info, setinfo] = useState('')
    const [products, setproducts] = useState([])
    // const products = useSelector((state) => state.Allproducts);
    // console.log(products)
    const slider_container = React.useRef(null)
    const isMobile = useMediaQuery("(max-width:800px)");
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`${EndPoint}/all`)
            setproducts(data)
        })();
        if (!isMobile) {
            products.length && customslider()
        }

    }, [products.length, isMobile])
    // useEffect(() => {
    // }, [])
    const handlecart = (item, quantity = 1) => {
        dispatch(shoppingdataAddToCart(item, quantity));
    };
    return (
        <div className='men_products_container'>
            <Nav black={'black'} />
            {
                isMobile ? <div className="swipe_txt">Swipe <ArrowRightAlt /></div> : null
            }
            <div className="arrow_left">
                <button className="skoll-button button--skoll"><span><span> <ArrowRightAlt /></span></span></button>
            </div>
            <div className="slide_slide">
                {
                    products.length && products?.map((product, i) => (
                        <Imageslide handlecart={handlecart} i={i} product={product} />
                    ))
                }
            </div>
            <div className="arrow_right">
                <button className="skoll-button button--skoll"><span><span> <ArrowRightAlt /></span></span></button>
            </div>
        </div>
    )
}

export default Men
