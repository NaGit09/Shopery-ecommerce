import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import DropDown from "./DropDown";

export const NavLink = () => {
  return (
    <nav className="bg-gray-800 h-12 flex justify-around items-center text-white font-normal">
      <div>
        <DropDown index={1} name={"Home"} items={["User home", "Admin home"]} />
        <DropDown index={2} name={"Shop"} items={["User home", "Admin home"]} />
        <DropDown index={3} name={"Page"} items={["User home", "Admin home"]} />
        <DropDown index={4} name={"Blog"} items={["User home", "Admin home"]} />
        <a className="text-gray-400 hover:text-white focus:outline-none px-4 py-2">
          About Us
        </a>
        <a className="text-gray-400 hover:text-white focus:outline-none px-4 py-2">
          Contact Us
        </a>
      </div>
      <div>
        <FontAwesomeIcon icon={faPhoneVolume} /> <span>(219) 555-0114</span>
      </div>
    </nav>
  );
};
