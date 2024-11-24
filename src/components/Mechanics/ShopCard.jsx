import React from "react";
const ShopCard = ({ name, id, cost, onButtonClick }) => {
  return (
    <div className="border-3 rounded-lg my-4 p-2">
      {" "}
      <div className="flex items-center justify-between text-white font-Terminal">
        <h2>{name}</h2> 
        <p>Cost: {cost}</p>{" "}
      </div>
      <div className="bg-blue-400 rounded-md p-2 text-white font-Terminal font-black text-lg text-center mx-5 bot" onClick={() => onButtonClick(id, cost)}>Purchase</div>{" "}
    </div>
  );
};

export default ShopCard;
