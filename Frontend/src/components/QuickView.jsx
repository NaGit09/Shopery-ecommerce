import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons/faEye";

const QuickView = () => {
  return (
    <button className="shadow button-circle text-gray-900 bg-white hover:bg-Primary hover:text-white">
      <FontAwesomeIcon icon={faEye} />
    </button>
  );
};

export default QuickView;
