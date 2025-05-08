import React, { useState } from "react";
import { GenStar } from "../../../utils/Generate";
import Price from "../../SingleComponent/Text/Price";
import QuickView from "../../SingleComponent/Button/QuickView";
import AddToCart from "../../SingleComponent/Button/AddToCart";
import AddToWishList from "../../SingleComponent/Button/AddToWishList";

const ProductVer = ({image , price , star}) => {
  const [mouseOn, setMouseOn] = useState(false);
  const handleOnMouse = () => {
    setMouseOn(true);
  };
  const handleOverMouse = () => {
    setMouseOn(false);
  };
  return (
    <div
      onMouseEnter={handleOnMouse}
      onMouseLeave={handleOverMouse}
      className="w-[424px] h-[116px] rounded-sm flex justify-start items-center shadow hover:shadow-Primary"
    >
      <img src={image} />
      <div className="flex ml-2 flex-col items-center justify-start">
        <h5>Chanise Cabbage</h5>

        {mouseOn ? (
          <div className="flex gap-3 mt-3">
            <AddToCart shape={"button-circle"} />
            <QuickView />
            <AddToWishList />
          </div>
        ) : (
          <div className="flex flex-col">
            <Price price={price} />
            {GenStar(star)}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductVer;
