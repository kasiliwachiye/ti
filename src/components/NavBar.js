import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start">
        <NavLink to="/" className=" btn btn-ghost normal-case text-xl">
          TouchInspo
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
