import React from "react";
import { useState } from "react";

const Button = ({onClick}) => {
    const [isSmall, setIsSmall] = useState(false);
    const handleMouseDown = () => { setIsSmall(true); };
    const handleMouseUp = () => { setIsSmall(false); };

    return (


        <img className='object-contain' style={{width: isSmall ? '250px' : '400px', transition: 'width 0.05s', cursor: 'pointer' }} src={'/hardware.png'} onClick={onClick} onMouseDown={handleMouseDown} onMouseUp={handleMouseUp} />

    )

}
export default Button