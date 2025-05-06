import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Close = () => {
  return (
    <button className="shadow button-circle text-dark bg-light text-2xl hover:text-white hover:bg-Primary ">
      <FontAwesomeIcon icon={faXmark} />
    </button>
  );
};

export default Close;
