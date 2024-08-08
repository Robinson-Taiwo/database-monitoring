import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex flex-1 flex-row gap-[1rem] ">
        <a className="btn btn-ghost text-xl">daisyUI</a>

        <div className="class  flex flex-row  gap-[1.5rem] ">
          <p>Blog</p>
          <p>Pricing</p>
        </div>
      </div>

      <div className="flex items-center gap-[1.5rem] flex-row ">
        <p>Log in</p>
        <ul className="menu menu-horizontal px-1">
          <li>
            <a className="btn btn-ghost bg-purple-600 text-white text-base">
              start free trial
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
