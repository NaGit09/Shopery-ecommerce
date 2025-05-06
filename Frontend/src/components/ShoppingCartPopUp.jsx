import React from "react";
import CartProduct from "./CartProduct";
import Apple from "../assets/Fruits/GreenApple.png";
import Button from "./Button";
const ShoppingCartPopUp = ({ data }) => {
  return (
    <div className="w-md">
      <div className="bg-white shadow-lg rounded-lg p-5">
        {data &&
          data.map((item, index) => <CartProduct key={index} {...item} />)}
        <div className="flex items-center justify-between my-4 border-b-1 pb-3 border-gray-100">
          <span>{data && data.length} product</span>
          <span>
            ${data && data.reduce((acc, item) => item.price + acc, 0)}
          </span>
        </div>
        <Button content="Checkout" />
        <Button content="Go to cart" type="ghots" />
      </div>
    </div>
  );
};

export default ShoppingCartPopUp;
