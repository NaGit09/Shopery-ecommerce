import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Logo from "../../../assets/OFood.png";
import SearchBar from "../../SingleComponent/Block/SearchBar";
import ShoppingCart from "../Shopping/ShoppingCart";
import { NavLink } from "./NavLink";
const Header = () => {
  return (
    <div>
      <div className="grid grid-cols-9 sm:grid-cols-4  md:grid-cols-6  text-gray-600 border-b-2  py-2 px-4">
        <div className="md:col-span-2 sm:col-span-3">
          <p className="lg:text-start md:text-center">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            Ký túc xá ĐHQG HCM, Thủ Đức, TP.HCM
          </p>
        </div>
        <div className="col-span-3 col-start-9 md:col-span-2  md:col-start-5">
          <div className="flex justify-end items-center gap-4 ">
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
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 sm:grid-cols-4  md:grid-cols-12 my-4 h-4xl">
        <div className="col-start-2 md:col-start-2 ml-3 ">
          {" "}
          <img src={Logo} alt="OFood" />
        </div>
        <div className="col-start-6  md:col-start-5">
          {" "}
          <SearchBar />
        </div>
        <div className="col-start-10 md:col-start-11 absolute_center">
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
