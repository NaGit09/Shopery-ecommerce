import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
const DropDown = ({ index, name, items }) => {
  return (
    <div className="dropdown dropdown-hover shadow ">
      <div className="dropdown">
        <div tabIndex={index} role="button" className=" bg-transparent text-gray-400 focus:outline-none px-4 py-2">
          {name} <FontAwesomeIcon className="ml-36" icon={faChevronDown} />
        </div>
        <ul
          tabIndex={index}
          className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
        >
          {items && items.map((item, index) => (
            <li key={index} className="hover:bg-gray-200">
              <a href="#">{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;
