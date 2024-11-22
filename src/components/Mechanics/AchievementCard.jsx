import React from "react";

const AchievementCard = ({ name, desc, icon, status }) => {


    if (status == true) {
        return (
            <div className="border-3 rounded-lg bg-blue-400 my-4 p-2">
                {" "}
                <div className="flex items-center justify-between text-white font-Terminal">
                    <img style={{ height: 'auto', width: '50px' }} src={icon} alt="" />
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
            <div className="border-3 rounded-lg bg-slate-800 my-4 p-2">
                {" "}
                <div className="flex items-center justify-between text-gray-600 font-Terminal">
                    <img style={{ height: 'auto', width: '50px' }} src={icon} alt="" />
                    <div>
                        <h2>{name}</h2>
                        <p>{desc}</p>{" "}
                    </div>
                </div>
            </div>
        )
    }
}

export default AchievementCard;