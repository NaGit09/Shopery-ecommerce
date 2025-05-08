import React from "react";
import Window from "../assets/SVGs/Window.svg";
const AccountLink = () => {
  return (
    <a className="flex shadow w-xs px-4 py-2 hover:border-l-4 hover:border-Primary hover:bg-green-50 ml-5">
      <img src={Window} />
      <span className="ml-5 text-sm text-gray-600">Dashboard</span>
    </a>
  );
};

export default AccountLink;
