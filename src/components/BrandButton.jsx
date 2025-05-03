import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faXTwitter,
  faPinterestP,
} from "@fortawesome/free-brands-svg-icons";
const GetIconBrand = (brand) => {
  switch (brand) {
    case "Facebook":
      return {
        icon: <FontAwesomeIcon icon={faFacebookF} />,
        link: "https://www.facebook.com/",
      };
    case "Instagram":
      return {
        icon: <FontAwesomeIcon icon={faInstagram} />,
        link: "https://www.instagram.com/",
      };
    case "Twitter":
      return {
        icon: <FontAwesomeIcon icon={faXTwitter} />,
        link: "https://twitter.com/",
      };
    case "Pinterest":
      return {
        icon: <FontAwesomeIcon icon={faPinterestP} />,
        link: "https://www.pinterest.com/",
      };
    default:
      return null;
  }
};
const BrandButton = ({ brand }) => {
  const Brand = GetIconBrand(brand);
  return (
    <div>
      <a
        href={Brand.link}
        className="absolute_center shadow button-circle text-dark bg-light text-2xl hover:text-white hover:bg-Primary"
      >
        {Brand.icon}
      </a>
    </div>
  );
};

export default BrandButton;
