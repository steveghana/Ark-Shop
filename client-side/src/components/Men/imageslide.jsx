import React, { useEffect } from 'react'

function Imageslide({ product, i, handlecart }) {
    const { description, name, sub, color, ProductColor, pc1, pc2, _id: id } = product
    const [qty, setqty] = React.useState(1);

    let hexarray = [pc1, pc2]
    const colorsplit = ProductColor.split("/")
    return (
        <div key={i} className="slider_slides">
            <img src={product?.image} alt="r2" />
            <div className="product_text">
                <p>{description}</p>
            </div>
            <div className="slide_footer">
                <div className="slide_description">
                    <div className="patterns">
                        <svg className='svg_wrapper' width="100%" height="100%">
                            <text className='svg_text' stroke={color} x="50%" y="60%" textAnchor="middle">
                                {`${name} ${sub}`}
                            </text>
                        </svg>
                    </div>
                    <div style={{ color }} className="price">{`$ ${Number(product.price).toFixed(2)}`}</div>
                    <div className="colors">
                        {
                            colorsplit?.map((cl, i) => (
                                <div className='bar_textcolor' key={i} style={{ color: hexarray[i] }} >
                                    <div style={{ background: hexarray[i] }} className="colorbar"></div>
                                    <div className='color_text'>
                                        Color
                                    </div>
                                </div>))
                        }
                    </div>
                </div>
                <div style={{ background: color }} onClick={() => handlecart(id, qty)} className="cart_background">add to cart</div>
            </div>
        </div>
    )
}

export default Imageslide
