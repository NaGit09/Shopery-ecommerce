import { React, useState } from "react";
import Member from "../../../assets/Team/TeamMember.png";
import BrandButton from "../../SingleComponent/Achor/BrandButton";
const TeamCard = () => {
  const [mouseOn, setMouseOn] = useState(false);
  return (
    <div
      onMouseEnter={() => setMouseOn(true)}
      onMouseLeave={() => setMouseOn(false)}
      className="card shadow-sm max-w-[312px]"
    >
      <figure className="relative  h-[280px]">
        <img src={Member} alt="Shoes" />
      </figure>
      {mouseOn && (
        <div className="absolute top-0 left-0 w-[312px] h-[280px] bg-gray-900/50 flex items-center justify-center">
          <BrandButton brand={"Facebook"} />
          <BrandButton brand={"Pinterest"} />
          <BrandButton brand={"Instagram"} />
          <BrandButton brand={"Twitter"} />
        </div>
      )}
      <div className="card-body">
        <h2 className="card-title">Jenny Wilson</h2>
        <p>Ceo & Founder</p>
      </div>
    </div>
  );
};

export default TeamCard;
