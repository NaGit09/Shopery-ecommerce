import React from "react";
import logo from "../assets/OFoodLight.png";
import Cart from '../assets/Payment/Cart.png';
import ApplePay from '../assets/Payment/Method=ApplePay.png';
import Discover from '../assets/Payment/Method=Discover.png';
import Mastercard from '../assets/Payment/Method=Mastercard.png';
import Visa from "../assets/Payment/Method=Visa.png";

const Footer = () => {
  return (
    <div className="grid grid-cols-12 grid-rows-5 gap-3 bg-gray-900 font-medium text-gray-500 pt-10">
      <div className="col-span-4 row-span-4 flex items-start flex-col gap-3 ml-4 mt-4">
        <img src={logo} alt="logo" />
        <p className="max-w-md ">
          Morbi cursus porttitor enim lobortis molestie. Duis gravida turpis
          dui, eget bibendum magna congue nec.
        </p>
        <p>
          <span className="underline underline-offset-4 decoration-green-500 text-white font-thin mr-2">
            0387822490
          </span>
          or
          <span className="underline underline-offset-4 decoration-green-500 text-white font-thin ml-2">
            nhutanhtran806@gmail.com
          </span>
        </p>
      </div>
      <div className="row-span-4 col-start-6">
        <p className="text-white font-bold text-lg">My Account</p>
        <ul className="flex flex-col gap-2 mt-4">
          <li>
            <a className="hover:text-white">My Account</a>
          </li>
          <li>
            <a className="hover:text-white">Order History</a>
          </li>
          <li>
            <a className="hover:text-white">Shoping Cart</a>
          </li>
          <li>
            <a className="hover:text-white">Wishlist</a>
          </li>
        </ul>
      </div>
      <div className="row-span-4 col-start-8">
        <p className="text-white font-bold text-lg">Help</p>
        <ul className="flex flex-col gap-2 mt-4">
          <li>
            <a className="hover:text-white">Contact Us</a>
          </li>
          <li>
            <a className="hover:text-white">Faqs</a>
          </li>
          <li>
            <a className="hover:text-white text-nowrap">Terms & Condition</a>
          </li>
          <li>
            <a className="hover:text-white">Privacy Policy</a>
          </li>
        </ul>
      </div>
      <div className="row-span-4 col-start-10">
        <p className="text-white font-bold text-lg">Categories</p>
        <ul className="flex flex-col gap-2 mt-4">
          <li>
            <a className="hover:text-white text-nowrap">Fruit & Vegetables</a>
          </li>
          <li>
            <a className="hover:text-white">Meat & Fish</a>
          </li>
          <li>
            <a className="hover:text-white text-nowrap">Bread & Bakery</a>
          </li>
          <li>
            <a className="hover:text-white text-nowrap">Beauty & Health</a>
          </li>
        </ul>
      </div>
      <div className="row-span-4 col-start-12">
        <p className="text-white font-bold text-lg">Proxy</p>
        <ul className="flex flex-col gap-2 mt-4">
          <li>
            <a className="hover:text-white text-nowrap">About</a>
          </li>
          <li>
            <a className="hover:text-white">Shop</a>
          </li>
          <li>
            <a className="hover:text-white text-nowrap">Product</a>
          </li>
          <li>
            <a className="hover:text-white text-nowrap">Track Order</a>
          </li>
        </ul>
      </div>
      <div className="col-span-12 row-start-5 border-t-2 border-gray-500">
        <div className="flex justify-between px-4 py-2">
          <p>Ecobazar eCommerce © 2021. All Rights Reserved</p>
          <div className="flex gap-2">
           <img src={ApplePay}/>
           <img src={Mastercard}/>
           <img src={Visa}/>
           <img src={Cart}/>
           <img src={Discover}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
