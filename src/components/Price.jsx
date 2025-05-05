import React from "react";
const getType = (type) => {
  switch (type) {
    case "small":
      return "text-base";
    case "medium":
      return "text-sm ";
    default:
      return "text-2xl";
  }
};
const Price = ({ price, type, sale }) => {
  const style = getType(type);
  return (
    <p className="ml-2">
      <span className={`${style} text-gray-900 font-semibold`}>${price}.00</span>
      {sale && (
        <span className={`${style} text-gray-400 line-through ml-2`}> ${price/sale * 100}.00</span>
      )}
    </p>
  );
};

export default Price;
