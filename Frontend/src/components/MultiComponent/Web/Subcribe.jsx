import React from "react";
import BrandButton from "../../SingleComponent/Achor/BrandButton";
const Subcribe = () => {
  // define validation data 
  return (
    <div className="flex items-center justify-evenly w-full bg-gray-100 py-5">
      <div className="">
        <h2 className="text-2xl font-bold">Subscribe to our newsletter</h2>
        <p className="text-gray-500 text-wrap max-w-[450px]">
        Pellentesque eu nibh eget mauris congue mattis mattis nec tellus. Phasellus imperdiet elit eu magna.
        </p>
      </div>
      <div className="join w-100 relative">
        <label className="input bg-white border-2 rounded-l-box border-gray-100">
          <input type="email" required placeholder="Your email address" />
        </label>
        <button className="btn bg-Primary border-0 join-item rounded-full absolute right-10 z-50">
          Subscribe
        </button>
      </div>
      <div className="flex gap-3 text-gray-900">
        <BrandButton brand="Facebook" />
        <BrandButton brand="Twitter" />
        <BrandButton brand="Instagram" />
        <BrandButton brand="Pinterest" />
      </div>
    </div>
  );
};

export default Subcribe;
