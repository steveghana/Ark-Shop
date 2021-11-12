import React, { useRef, useState, useEffect } from 'react'
import { Close } from '@material-ui/icons'
import "./info.css"
function Infomobile({ mobileinfo, setmobileinfo,  color, index, background, specifications, description, header }) {
    const info = useRef(null)
    useEffect(() => {
        mobileinfo ? info.current.classList.add('show-mobile-info') : info.current.classList.remove('show-mobile-info')
    }, [mobileinfo])

    return (

        <div className="mobile-description" ref={info}  style={{backgroundColor: index === 0 ? background : color,color: index === 0 ? color : "white"}}>
            {mobileinfo && (
                <Close onClick={()=> setmobileinfo(false)} style={{width : "100%", marginLeft :"auto"}} />
            )}
            <div className="mobile-header">{header}</div>
            <div className="mobile-details">{description}</div>
            <div className="mobile-bio flex-col align-center ">
                {specifications.length && specifications.map((item, index) => <div key={index}>{item}</div>)}
            </div>
        </div>

    )
}

export default Infomobile
