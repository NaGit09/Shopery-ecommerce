import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
const ShoppingCart = () => {
  return (
    <div className="flex justify-center items-center gap-4">
        <div className="relative">
      <FontAwesomeIcon className="Icon-header" icon={faCartShopping} />
     
      <div
        style={{
          borderRadius: "50%",
          top: "-10px",
          right: "10px",
        }}
        className="absolute bg-green-900 w-6 text-center text-white font-bold"
      >
        2
      </div>
    </div>
    <div className="w-40">
        <p>Shopping cart : </p>
        <p className="font-medium">$57.00</p>
    </div>
    </div>
  );
};

export default ShoppingCart;
