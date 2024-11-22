import React from "react";
import "./Header.css";
import Score from "../Mechanics/Score"
import Perclick from "../Mechanics/Perclick"



const Header = ({score, alt, mult}) => {

    return (
        <nav className="navbar m-0 p-0 sep-line">
            <div className="container-fluid bg-black py-2 px-16 m-0">
                <button className="btn btn-secondary font-Terminal">EXIT</button>
                <div className="">
                    <div className="text-blue-400 text-center font-Terminal text-2xl">
                        <Score score={score}/>
                    </div>
                    <div className="text-blue-400 text-center font-Terminal text-xl">
                        <Perclick score={score} alt={alt} mult={mult}/>
                    </div>
                </div>
                <div className="border-blue-900 rounded-2xl p-2 bg-blue-400 hover:bg-blue-500">
                    <div className="text-4xl">👤</div>
                </div>
            </div>
        </nav>



    )
}

export default Header