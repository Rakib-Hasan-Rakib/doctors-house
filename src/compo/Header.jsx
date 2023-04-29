import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-cyan-950 p-2">
      <div className="flex justify-between items-center w-10/12 mx-auto">
        <div>
          <img
            className="w-16"
            src="https://i.ibb.co/TtRpKPP/doctor.png"
            alt="Website logo"
          />
        </div>
        <div className="text-white">
          <NavLink className="ml-4" to="/">
            Home
          </NavLink>
          <NavLink className="ml-4" to="/sign-in">
            Sign In
          </NavLink>
          <NavLink className="ml-4" to="/sign-up">
            Sign Up
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
