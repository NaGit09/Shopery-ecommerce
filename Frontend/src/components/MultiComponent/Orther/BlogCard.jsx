import React from "react";
import BunBo from "../../../assets/Blog/BunBo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTag,
  faArrowRight,
  faComment,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const BlogCard = () => {
  return (
    <div className="h-[494px] w-[424px] flex flex-col shadow rounded-xl group">
     <div className="relative">
     <img  src={BunBo} />
      <p className="absolute bottom-5 w-[58px] h-[58px] text-gray-600 bg-white/70 rounded-sm px-2 py-1 left-5 text-center">
      <span className="font-semibold text-xl text-black">18</span> NOV</p>
     
     </div>
      <div className="text-gray-400 flex flex-col items-start justify-start px-4 py-4">
        <div className="flex justify-start gap-3 mb-2">
            <span>
              <FontAwesomeIcon icon={faTag} /> Food
            </span>
            <span>
              <FontAwesomeIcon icon={faUser} /> By Admin
            </span>
            <span>
              <FontAwesomeIcon icon={faComment} /> 566 Comments
            </span>
        </div>
        <p className="text-md text-gray-900 font-semibold mb-2 group-hover:text-Hard-Primary">
            Curabitur porttitor orci eget neque accumsan venenatis. Nunc
            fermentum.
          </p>
          <a className="mr-auto text-Primary font-semibold">
          Read more <FontAwesomeIcon icon={faArrowRight} />
        </a>
      </div>
      
    </div>
  );
};

export default BlogCard;
