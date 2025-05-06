import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Arrow = () => {
  return (
    <button className="absolute_center button-circle shadow text-gray-900 bg-white hover:bg-Primary hover:text-white  transition-all duration-300">
      <FontAwesomeIcon icon={faArrowRight} />
    </button>
  );
};

export default Arrow;
