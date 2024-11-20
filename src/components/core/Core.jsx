import React from "react";
import "./Core.css"
import Button from "../Mechanics/Button"

const Core = ({onIncrement}) => {
    return (
        <div className="flex justify-center items-center core-grad p-64 ">
            <div className=" min-w-80 place-items-center">
                <Button onClick={onIncrement}/>
            </div>
        </div>

    )
}

export default Core