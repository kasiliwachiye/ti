import React from "react";

const NavBar = () => {
  return (
    <div className="navbar border-b-2">
      <div className="navbar-start">
        <a className="btn btn-ghost normal-case text-xl">Touch Inspo</a>
      </div>
      <div className="navbar-end">
        <a className="btn btn-outline">Add User</a>
      </div>
    </div>
  );
};

export default NavBar;
