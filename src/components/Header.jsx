import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Logo from "../assets/OFood.png";
import SearchBar from "./SearchBar";
import ShoppingCart from "./ShoppingCart";
import { NavLink } from "./NavLink";
const Header = () => {
  return (
    <div>
      <div className="grid grid-cols-5 grid-rows-1 text-gray-600 border-b-2  py-2 px-4">
        <div className="col-span-2 row-start-2">
          <p className="text-center">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="text-primary mr-2"
            />
            Ký túc xá ĐHQG HCM, Thủ Đức, TP.HCM
          </p>
        </div>
        <div className="col-span-2 col-start-4 row-start-2">
          <div className="flex justify-center items-center gap-4 ">
            <a href="#" className="mr-2">
              Eng <FontAwesomeIcon icon={faChevronDown} />
            </a>
            <a href="#" className="mr-2">
              USD <FontAwesomeIcon icon={faChevronDown} />
            </a>
            <p>
              {" "}
              <a href="/SignIn">Sign in</a> / <a href="/SignUp">Sign up</a>
            </p>
            <div></div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-8 grid-rows-1 gap-4 my-4 h-4xl">
        <div className="col-start-2">
          {" "}
          <img src={Logo} alt="OFood" />
        </div>
        <div className="col-start-4">
          {" "}
          <SearchBar />
        </div>
        <div className="col-start-7 absolute_center">
          {" "}
          <FontAwesomeIcon className="Icon-header" icon={faHeart} />
          <ShoppingCart />
        </div>
      </div>
      <NavLink />
    </div>
  );
};

export default Header;
