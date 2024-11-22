import React from "react";


const Button = ({onClick}) => {
    return(

        <img className='object-contain'  style={{ cursor: 'pointer'}} src="src\assets\hardware.png" onClick={onClick} />
    )

}
export default Button