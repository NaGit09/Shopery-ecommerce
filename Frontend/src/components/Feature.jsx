import React from "react";
const Feature = ({ reverse  , svg}) => {
  return (
    <div
      className={`flex  items-center justify-center h-screen bg-gray-100 ${
        reverse ? "flex-row-reverse" : "flex-row"
      } `}
    >
      <img className="max-w-[70px]" src={svg} />
      <div
        className={`flex flex-col ${reverse ? "mr-3" : "justify-start ml-3"} `}
      >
        <h1
          className={`text-gray-900 mb-2 text-base font-bold ${
            reverse ? "text-end" : "text-start"
          }`}
        >
          Feature
        </h1>
        <p className="text-sm ">Free shipping on all your order</p>
      </div>
    </div>
  );
};

export default Feature;
