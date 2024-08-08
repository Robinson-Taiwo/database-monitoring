import Image from "next/image";
import React from "react";
import image from "@/public/logo.svg";

const Navbar = () => {
  return (
    <div className="navbar px-[6.25rem] bg-base-100">
      <div className="flex flex-1 flex-row gap-[2.5rem] ">
        <Image src={image} alt="logo-icon" height={24} width={29.97} />

        <div className="text-[0.875rem] font-bold leading-[1.3125rem] text-[#344054] flex flex-row  gap-[1rem] ">
          <p>Blog</p>
          <p>Pricing</p>
        </div>
      </div>

      <div className="flex items-center gap-[1rem]  flex-row ">
        <button className=" w-[5.56rem] h-[2.8125rem] items-center justify-center rounded-[0.5rem] bg-white border border-[#D0D5DD] ">
          Log in
        </button>
        <ul className="menu menu-horizontal px-1">
          <li>
            <button className="  w-[8.8125rem] flex items-center justify-center  h-[2.8125rem] bg-[#7141F8] text-white text-[0.875rem] font-medium leading-[1.3125rem] rounded-[0.5rem] " >
              start free trial
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
