import React from "react";

const FoodType = ({ content }) => {
  return (
    <span className="shadow bg-gray-50 text-sm text-gray-900 text-center hover:bg-Primary hover:text-white">
      {content && content}
    </span>
  );
};

export default FoodType;
