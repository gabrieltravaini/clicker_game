import React from "react";
import './MenuBar.css'

import Shop from '../Shop/Shop.jsx'
import Achievements from '../Achievements/Achievements.jsx'

const MenuBar = ({ onButtonClick }) => {
    
    return (

        <div className="container-fluid text-center items-center bg-black footer ">
            <div className="row items-center" >
                <div className="col items-center flex justify-center p-2">
                <Shop onButtonClick={onButtonClick}/>
                </div>
                <div className="col items-center flex justify-center p-2">
                <Achievements/>
                </div>
            </div>
        </div>

    )
}

export default MenuBar