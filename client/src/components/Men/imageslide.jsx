import React, { useState } from 'react'

function Imageslide({ product, i, handlecart }) {
    const { description, name, sub, color, ProductColor, pc1, pc2, _id: id, relatedImages } = product
    const [imageindex, setimageindex] = useState(0)

    const [qty, setqty] = React.useState(1);
    const handleimages = (item, e) => {
        setimageindex(item);
        e.target.style.border = `2px solid ${color}`;
    };
    const removeborderAfterClick = () => {
        [...document.querySelectorAll(".imgs")].forEach((image) => (image.style.border = "none"));
    };
    let hexarray = [pc1, pc2]
    const colorsplit = ProductColor.split("/")
    return (
        <div key={i} className="slider_slides">
            <div className="slide_patterns_mobile">
                <svg className='slide_svg_wrapper' width="100%" height="100%">
                    <text className='slide_svg_text' stroke={color} x="50%" y="60%" textAnchor="middle">
                        {`${name} ${sub}`}
                    </text>
                </svg>
            </div>
            <img className="image" src={relatedImages[imageindex]} alt="r2" />
            <div style={{ borderBottom: `3px solid ${color}` }} className="product_text">
                <p>{description}</p>
            </div>
            <div className="slide_footer">
                <div className="slide_description">

                    <div style={{ color }} className="price">{`$ ${product.price.toFixed(2)}`}</div>
                    <div className="relatedimages">

                        {relatedImages.length &&
                            relatedImages.map((img, index) => (
                                <>
                                    <img
                                        style={{ borderBottom: `3px solid ${color}` }}
                                        src={img}
                                        key={index}
                                        alt={name}
                                        onClick={(e) => {
                                            removeborderAfterClick();
                                            handleimages(index, e);
                                        }}
                                        className="imgs"
                                    />
                                </>
                            ))}
                    </div>
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
