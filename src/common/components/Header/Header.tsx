import React from "react";
import Icon from "../Icon/Icon";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <div className="navbar flex items-center w-full mb-2 shadow-lg bg-white text-gray-600 rounded-box h-16 p-5">
      <div className="flex-none hidden lg:flex">
        <button className="btn btn-square btn-ghost">
          <Icon icon={faBars} />
        </button>
      </div>
      <div className="flex-1 hidden px-2 mx-2 lg:flex relative">
        <span className="text-lg font-bold text-primary-500 text-2xl font-bold  -mt-1">
          YUNO
        </span>
        <span
          className={
            "absolute text-sm text-gray-400 left-0 -bottom-0.5 w-28 text-right"
          }
        >
          tvoja sola
        </span>
      </div>
    </div>
  );
};

export default Header;
