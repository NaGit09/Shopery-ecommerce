import { React, useState } from "react";
import Tag from "./Tag";
import Apple from "../assets/Fruits/GreenApple.png";
import AddToCart from "./AddToCart";
import QuickView from "./QuickView";
import { GenStar } from "../../../utils/Generate";
import Price from "./Price";
import AddToWishList from "./AddToWishList";
const getType = (type) => {
  switch (type) {
    case "5n":
      return "max-w-[264px] max-h-[327px]";
    case "4x":
      return "max-w-[312px] max-h-[407px]";
    default:
      return "max-w-[264px] max-h-[339px]";
  }
}
const Product = ({data, type }) => {
  const [isHoving, setIsHoving] = useState(false);
  const handleMouseEnter = () => {
    setIsHoving(true);
  };
  const handleMouseLeave = () => {
    setIsHoving(false);
  };
  const size = getType(type);
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`card shadow-sm hover:shadow-Primary relative px-2 py-3 group ${size}`}
    >
      <figure className="relative">
      <img className=" rounded-lg" src={Apple} alt="Shoes" />
      </figure>
      <div className="flex justify-between items-center px-2">
        <div className="flex flex-col justify-center items-start">
          <h4>{data.name}</h4>
          <Price type="small" price={data.price} />
          <div> {GenStar(data.star)}</div>
        </div>
        <AddToCart shape={"button-circle"} />
      </div>
      <div className="absolute top-2 left-2 flex gap-2 justify-between w-full px-2">
        <Tag type={"New"} />
      </div>
      {isHoving && (
        <div className="absolute top-2 right-2 flex flex-col gap-3">
          <QuickView />
          <AddToWishList />
        </div>
      )}
    </div>
  );
};

export default Product;
