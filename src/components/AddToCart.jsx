import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

const AddToCart = ({ content, shape }) => {
  const [active, setActive] = useState(true);
  return (
    <button
      className={`shadow ${shape && `${shape} rounded-full px-2 w-full`} ${
        active ? "text-white" : "text-gray-900"
      } ${
        active ? "bg-Primary" : "bg-gray-200"
      } hover:bg-Hard-Primary group-hover:bg-Primary group-hover:text-white transition-all duration-300 ease-in-out`}
      onClick={() => setActive(!active)}
    >
      {content && `${content}  `}
      <FontAwesomeIcon icon={faCartShopping} />
    </button>
  );
};

export default AddToCart;
