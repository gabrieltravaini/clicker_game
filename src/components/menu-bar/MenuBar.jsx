import React from "react";
import './MenuBar.css'

const MenuBar = () => {
    return (

        <div className="container-fluid text-center items-center bg-black footer ">
            <div className="row items-center" >
                <div className="col items-center flex justify-center p-2">
                <div className="bot-size rounded-lg font-Terminal  bg-blue-400 flex items-center justify-center text-3xl text-white hover:bg-blue-500 min-w-fit" >UPGRADES</div>
                </div>
                <div className="col items-center flex justify-center p-2">
                <div className="bot-size rounded-lg font-Terminal  bg-blue-400 flex items-center justify-center text-3xl text-white hover:bg-blue-500 min-w-fit">ACHIEVEMENTS</div>
                </div>
            </div>
        </div>

    )
}

export default MenuBar