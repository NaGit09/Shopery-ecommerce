import { React, useState } from "react";
import Tag from "./Tag";
import Apple from "../assets/Fruits/GreenApple.png";
import AddToCart from "./AddToCart";
import QuickView from "./QuickView";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Price from "./Price";
import AddToWishList from "./AddToWishList";

const Product5n = () => {
  const [isHoving, setIsHoving] = useState(false);

  const handleMouseEnter = () => {
    setIsHoving(true);
  };

  const handleMouseLeave = () => {
    setIsHoving(false);
  };
  const data = {
    name: "Green Apple",
    price: 2.99,
    star: 5,
  };
  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="card w-3xs shadow-sm relative px-2 py-2"
    >
      <img className="w-3xs h-3xs rounded-lg" src={Apple} alt="Shoes" />
      <div className="flex justify-between items-center px-2">
        <div className="flex flex-col justify-center items-start">
          <h4>{data.name}</h4>
          <Price type="small" price={data.price} />
          <div>
            {" "}
            {[...Array(data.star)].map((_, i) => (
              <FontAwesomeIcon
                key={i}
                icon={faStar}
                className="text-yellow-500 text-sm"
              />
            ))}
          </div>
        </div>
        <AddToCart />
      </div>
      <Tag type={"New"} />
      {isHoving && (
        <div className="absolute top-2 right-2 flex flex-col gap-3">
          <QuickView />
          <AddToWishList />
        </div>
      )}
    </div>
  );
};

export default Product5n;
