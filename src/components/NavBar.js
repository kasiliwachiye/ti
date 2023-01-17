import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="flex-1">
        <NavLink to="/" className=" btn btn-ghost normal-case text-xl">
          TouchInspo
        </NavLink>
      </div>
      <div className="flex-none">

      <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="user" />
              </div>
            </label>
          </div>
  </div>
    </div>
  );
};

export default NavBar;
