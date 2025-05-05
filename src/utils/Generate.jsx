import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export const GenStar =  ({quantity}) => {
   return   (
    <ul className="flex gap-1">
        {[...Array(quantity)].map((_, i) => (
       <li key={i}> <FontAwesomeIcon
       key={i}
       icon={faStar}
       className="text-yellow-500 text-sm"
     /></li>
      ))}
    </ul>
   )
}