import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneVolume } from "@fortawesome/free-solid-svg-icons";
import DropDown from "../../SingleComponent/Block/DropDown";

export const NavLink = () => {
  return (
    <nav className=" grid grid-rows-1 grid-cols-12 bg-gray-800 h-12  text-white font-normal">
      <div className="col-span-6 col-start-1 flex items-center justify-start">
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
      <div className="col-start-11 flex items-center justify-end mr-2 col-span-2">
        <FontAwesomeIcon icon={faPhoneVolume} className="mr-2" /> <span>(219) 555-0114</span>
      </div>
    </nav>
  );
};
