import React from "react";

function Navbar() {
  
  return<div>
   <div className='md :flex  items-center bg-white'>
  <div className="font-bold text-5xl cursor-pointer flex items-center font-[Poppins] text-[#02A6E7]">
    <span className="text-5xl text-[#000000] mr-1 pt-2">
    <ion-icon name="medkit-outline"></ion-icon>
    </span>
    CureCloud
    <div className="md :flex justify-end  text-3xl text-[#000000]">
      <ul>
        <li>
          Home
          About
          Contact
          Login
        </li>
      </ul>
    </div>
  </div >
 
  </div>
  </div>
}

export default Navbar;