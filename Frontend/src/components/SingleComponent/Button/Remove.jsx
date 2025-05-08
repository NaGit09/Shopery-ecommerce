import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
const Remove = () => {
  return (
    <button className='w-5 h-5 absolute_center border-2 border-gray-200 text-gray-600 hover:border-gray-900 hover:text-gray-900 rounded-full transition duration-300 ease-in-out'>
<FontAwesomeIcon icon={faXmark}/>
    </button>
  )
}

export default Remove