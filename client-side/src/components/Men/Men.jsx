import React, { useState, useEffect } from 'react'
import { useMediaQuery } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { ArrowRightAlt } from '@material-ui/icons'
import { customslider } from './customSlider'
import axios from 'axios'
import Nav from '../Home/Nav/nav'
import { shoppingdataAddToCart } from '../../Redux/actions/actions'
import Imageslide from './imageslide'

import './men.css'
function Men() {
    const EndPoint = `http://localhost:5000/productsinfo`;
    const dispatch = useDispatch()
    const isTablet = useMediaQuery('(max-width:600px)')
    const [qty, setqty] = React.useState(1);
    const [products, setproducts] = useState([])
    const index = products.length - 1
    const slider_container = React.useRef(null)
    const isMobile = useMediaQuery("(max-width:800px)");
    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`${EndPoint}/all`)
            setproducts(data)
        })();
        if (!isMobile) {
            products.length && customslider(slider_container)
        }


    }, [products.length, isMobile])
    const handlecart = (item, quantity = 1) => {
        dispatch(shoppingdataAddToCart(item, quantity));
    };
    return (
        <div className='men_products_container'>
            <Nav black={'black'} isMobile={isMobile} />

            <div className="arrow_left">
                <button className="skoll-button button--skoll"><span><span> <ArrowRightAlt /></span></span></button>
            </div>

            <div className="slide_slide" ref={slider_container}>
                <div id='lastclone' className="slider_slides">
                    <div className="slide_patterns_mobile">
                        <svg className='slide_svg_wrapper' width="100%" height="100%">
                            <text className='slide_svg_text' stroke={products[index]?.color} x="50%" y="60%" textAnchor="middle">
                                {`${products[index]?.name} ${products[index]?.sub}`}
                            </text>
                        </svg>
                    </div>
                    <img className="image" src={products[index]?.image} alt="r2" />
                    <div style={{ borderBottom: `3px solid ${products[0]?.color}` }} className="product_text">
                        <p>{products[index]?.description}</p>
                    </div>
                    <div className="slide_footer">
                        <div className="slide_description">
                            {
                                !isTablet ? (
                                    <div className="slide_patterns">
                                        <svg className='slide_svg_wrapper' width="100%" height="100%">
                                            <text className='slide_svg_text' stroke={products[index]?.color} x="50%" y="60%" textAnchor="middle">
                                                {`${products[index]?.name} ${products[index]?.sub}`}
                                            </text>
                                        </svg>
                                    </div>
                                ) : null
                            }
                            <div style={{ color: products[index]?.color }} className="price">{`$ ${Number(products[index]?.price).toFixed(2)}`}</div>
                            <div className="colors">
                                {
                                    products[index]?.colorsplit?.map((cl, i) => (
                                        <div className='bar_textcolor' key={i} style={{ color: products[index]?.pc1 }} >
                                            <div style={{ background: products[index]?.pc2 }} className="colorbar"></div>
                                            <div className='color_text'>
                                                Color
                                            </div>
                                        </div>))
                                }
                            </div>
                        </div>
                        <div style={{ background: products[index]?.color }} onClick={() => handlecart(products[index]?.id, qty)} className="cart_background">add to cart</div>
                    </div>
                </div>
                {
                    products.length && products?.map((product, i) => (
                        <Imageslide handlecart={handlecart} i={i} product={product} />
                    ))
                }
                <div id='firstclone' className="slider_slides">
                    {
                        isTablet ? (
                            <div className="slide_patterns_mobile">
                                <svg className='slide_svg_wrapper' width="100%" height="100%">
                                    <text className='slide_svg_text' stroke={products[0]?.color} x="50%" y="60%" textAnchor="middle">
                                        {`${products[0]?.name} ${products[0]?.sub}`}
                                    </text>
                                </svg>
                            </div>
                        ) : null
                    }
                    <img className="image" src={products[0]?.image} alt="r2" />
                    <div style={{ borderBottom: `3px solid ${products[0]?.color}` }} className="product_text">
                        <p>{products[0]?.description}</p>
                    </div>
                    <div className="slide_footer">
                        <div className="slide_description">
                            {
                                !isTablet ? (
                                    <div className="slide_patterns">
                                        <svg className='slide_svg_wrapper' width="100%" height="100%">
                                            <text className='slide_svg_text' stroke={products[0]?.color} x="50%" y="60%" textAnchor="middle">
                                                {`${products[0]?.name} ${products[0]?.sub}`}
                                            </text>
                                        </svg>
                                    </div>
                                ) : null
                            }
                            <div style={{ color: products[0]?.color }} className="price">{`$ ${Number(products[0]?.price).toFixed(2)}`}</div>
                            <div className="colors">
                                {
                                    products[0]?.colorsplit?.map((cl, i) => (
                                        <div className='bar_textcolor' key={i} style={{ color: products[0]?.pc1 }} >
                                            <div style={{ background: products[0]?.pc2 }} className="colorbar"></div>
                                            <div className='color_text'>
                                                Color
                                            </div>
                                        </div>))
                                }
                            </div>
                        </div>
                        <div style={{ background: products[0]?.color }} onClick={() => handlecart(products[0]?.id, qty)} className="cart_background">add to cart</div>
                    </div>
                </div>
            </div>
            <div className="arrow_right">
                <button className="skoll-button button--skoll"><span><span> <ArrowRightAlt /></span></span></button>
            </div>
        </div>
    )
}

export default Men
