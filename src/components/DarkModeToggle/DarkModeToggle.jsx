"use client"

import React, { useContext } from 'react'
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md"
import { ThemeContext } from "../../../context/ThemeContext";

const DarkModeToggle = () => {
    const { toggle, mode } = useContext(ThemeContext);

  return (
    <div onClick={toggle} className="w-[42px] h-[24px] border border-[#53c28b70] rounded-lg flex justify-between items-center relative cursor-pointer">
        <div className="w-3 h-3 relative bottom-[2px] text-yellow-200"> 
            <MdOutlineDarkMode />
        </div>
        <div className="w-3 h-3 relative right-1.5 bottom-[2px] text-yellow-200">
            <MdOutlineLightMode />
        </div>
        <div 
        className="w-4 h-4 bg-[#53c28b] rounded-full absolute"
        style={mode === "light" ? { left: "2px" } : { right: "2px" }} />
    </div>
  )
}

export default DarkModeToggle