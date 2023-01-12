import React from "react";

const NavBar = () => {
  return (
    <div className="navbar border-b-2">
      <div className="navbar-start">
        <h1 className=" normal-case text-xl">Touch Inspo</h1>
      </div>
      <div className="navbar-end">
        <button className="btn btn-outline">Add User</button>
      </div>
    </div>
  );
};

export default NavBar;
