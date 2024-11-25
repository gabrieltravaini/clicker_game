import React from "react";
import { useState } from "react";

const Button = ({onClick}) => {
    let [ img, setImg ] = useState()

    function onDown() {
        setImg('{transform: scale(0.7)}')
    }
    function onUp() {
        setImg('{transform: scale(0.7)}')
    }

    return(


        <img className='object-contain' style={{ cursor: 'pointer', img}}  src={'/hardware.png'} onClick={onClick} onMouseDown={onDown} onMouseUp={onUp} />

    )

}
export default Button