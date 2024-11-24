import React from "react";
import locked from "../../assets/locked.png"
const AchievementCard = ({ name, desc, icon, status }) => {


    if (status === true) {
        return (
            <div className="border-3 rounded-lg bg-blue-400 my-4 py-2 px-4">
                {" "}
                <div className="flex items-center justify-between text-white font-Terminal">
                    <img className="border-2 rounded-md box-content p-1" style={{ height: 'auto', width: '50px' }} src={icon} alt="" />
                    <div>
                        <h2>{name}</h2>
                        <p>{desc}</p>{" "}
                    </div>
                </div>
            </div>
        )
    }
    else{
        return (
            <div className="border-3 border-zinc-800 rounded-lg bg-black my-4 py-2 px-3">
                {" "}
                <div className="flex items-center justify-between text-zinc-700 font-Terminal">
                    <img style={{ height: 'auto', width: '50px' }} src={locked} alt="" />
                    <div className="text-left">
                        <h2>Locked</h2>
                        <p>{desc}</p>{" "}
                    </div>
                </div>
            </div>
        )
    }
}

export default AchievementCard;