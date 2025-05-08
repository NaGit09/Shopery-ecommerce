import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
const TrackPoint = ({ content }) => {
  return (
    <button className={`button-circle ${content ? "border-2 text-Primary border-Primary border-dashed bg-white  hover:bg-Primary hover:text-white" : "bg-Primary text-white"} `}>
      {content ? (
        content
      ) : (
        <FontAwesomeIcon icon={faCheck} />
      )}
    </button>
  );
};

export default TrackPoint;
