import React from "react";
import "./Header.css";
import Score from "../Mechanics/Score"

import Perclick from "../Mechanics/Perclick"



const Header = ({score, alt, mult}) => {


    return (
        <nav className="navbar m-0 p-0 sep-line">
            <div className="container-fluid bg-black py-2 px-16 m-0">
                <p></p>
                <div className="">
                    <div className="text-blue-400 text-center font-Terminal text-2xl">
                        <Score score={score}/>
                    </div>
                    <div className="text-blue-400 text-center font-Terminal text-xl">

                        <Perclick score={score} alt={alt} mult={mult}/>

                    </div>
                </div>
                <p></p>
            </div>
        </nav>



    )
}

export default Header