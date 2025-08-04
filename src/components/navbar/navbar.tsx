import React from 'react'
import NavPart1 from './NavPart1'
import NavPart2 from "./NavPart2";
const navbar = () => {
  return (
    <div>
        <div className="flex justify-between items-center py-3 px-3 ">
        <NavPart1 />
        <NavPart2 />
        </div>
       
    </div>
  )
}

export default navbar