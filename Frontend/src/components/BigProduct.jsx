import React from "react";
import GreenApple from "../assets/Fruits/BigGreenApple.png";
import Tag from "./Tag";
import AddToWishList from "./AddToWishList";
import AddToCart from "./AddToCart";
import QuickView from "./QuickView";
import Price from "./Price";
import { GenStar } from "../utils/Generate";
import Coutdown from "./Coutdown";
const BigProduct = () => {
  const data = {
    name: "Green Apple",
    tags: ["Sale", "Best Sale"],
    percent: 50,
    price: 24.0,
    star: 5,
    FeedBack: 546,
    Time: "2025-05-07T22:09:59",
    image: GreenApple,
    message: "Hurry up! Offer ends In:",
  };
  return (
    <div className="card max-w-max max-h-max  shadow-sm group hover:shadow-Primary">
      <div className="relative ">
        <img className="max-w-md" src={data.image} alt="Green apple " />
      </div>
      <div className=" top-5 left-2 flex gap-2 justify-between absolute">
        {data.tags.map((tag, index) => (
          <Tag key={index} type={tag} sale={data.percent} />
        ))}
      </div>
      <div className="absolute bottom-60 flex gap-2 justify-between w-full px-2">
        <AddToWishList />
        <AddToCart shape={"Pill"} content={"Add to cart "} />
        <QuickView />
      </div>
      <div className="card-body absolute_center">
        <h2 className="card-title font-medium text-Hard-Primary text-2xl ">{data.name}</h2>
        <div className="flex gap-2 items-center flex-col justify-center">
          <Price price={data.price} sale={data.percent} />
          <div className="flex gap-2 items-center">
            {GenStar({ quantity: data.star })}
            <p className="text-gray-400">{`(${data.FeedBack} Feedback)`}</p>
          </div>
          <p className="text-gray-400">{data.message}</p>
          <Coutdown targetDate={data.Time} />
        </div>
      </div>
    </div>
  );
};

export default BigProduct;
