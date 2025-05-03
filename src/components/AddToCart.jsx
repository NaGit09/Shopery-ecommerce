import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons/faCartShopping";

const AddToCart = () => {
  const [active, setActive] = useState(true);
  return (
    <button
      className={` button-circle ${active ? "text-white" : "text-gray-900"} ${
        active ? "bg-Primary" : "bg-gray-50"
      } hover:bg-Hard-Primary`}
      active={active}
      onClick={() => setActive(!active)}
    >
      <FontAwesomeIcon icon={faCartShopping} />
    </button>
  );
};

export default AddToCart;
