import React from "react";
import './MenuBar.css'

import Shop from '../Shop/Shop.jsx'
import Achievements from '../Achievements/Achievements.jsx'

const MenuBar = ({achievea,achieveb,achievec,upCost1,upCost2,  onButtonClick }) => {
    
    return (

        <div className="container-fluid text-center items-center bg-black footer ">
            <div className="row items-center" >
                <div className="col items-center flex justify-center p-2">
                <Shop onButtonClick={onButtonClick}upCost1={upCost1}upCost2={upCost2}/>
                </div>
                <div className="col items-center flex justify-center p-2">
                <Achievements achievea={achievea} achieveb={achieveb} achievec={achievec}/>
                </div>
            </div>
        </div>

    )
}

export default MenuBar