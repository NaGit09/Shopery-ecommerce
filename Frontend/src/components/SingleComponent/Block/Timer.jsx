import React from 'react'

const Timer = ({Time , type , color }) => {
  return (
    <div className="text-center absolute_center flex-col  mr-2">
        <span className={`text-${color}-900 font-bold text-xl`}>{Time}</span>
        <span className={`text-${color}-400`}>{type}</span>
      </div>
  )
}

export default Timer