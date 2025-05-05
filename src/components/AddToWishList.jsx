import React, { useState } from "react";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as regularHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddToWishList = () => {
  const [active, setActive] = useState(false);
  return (
    <button
      className={`shadow button-circle 
        hover:bg-Primary hover:text-white
       ${active ? "text-Primary" : "text-dark"}`}
      onClick={() => setActive(!active)}
    >
      {active ? (
        <FontAwesomeIcon icon={solidHeart} />
      ) : (
        <FontAwesomeIcon icon={regularHeart} />
      )}
    </button>
  );
};

export default AddToWishList;
