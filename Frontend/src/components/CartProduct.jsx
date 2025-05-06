import React from "react";
import Remove from "./Remove";
const CartProduct = ({ img, name, weight, price }) => {
  return (
    <div className="flex items-center justify-between mb-4 border-b-1 pb-3 border-gray-100 hover:border-gray-800">
      <img src={img} alt="Product" className="" />
      <div className="flex flex-col ml-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <div>
          <span className="text-gray-500 text-center mr-2">{weight} Kg x</span>
          <span className="text-gray-900 font-semibold">{price}</span>
        </div>
      </div>
      <Remove />
    </div>
  );
};

export default CartProduct;
