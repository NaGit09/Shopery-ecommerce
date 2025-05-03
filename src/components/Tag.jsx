import React from "react";
const GetBackgroundColor = (type) => {
  switch (type) {
    case "Sale":
      return "bg-Danger";
    case "Best Sale":
      return "bg-blue-500";
    case "Out of Stock":
      return "bg-gray-900";
    default:
      return "bg-Warning";
  }
};
const Tag = ({ type, sale }) => {
  const backgroundColor = GetBackgroundColor(type);
  return (
    <span
      className={` px-3 rounded-sm py-1 ${backgroundColor}  text-white text-sm font-semibold absolute top-2 left-2`}
    >
      {type} {sale && `${sale}%`}
    </span>
  );
};

export default Tag;
