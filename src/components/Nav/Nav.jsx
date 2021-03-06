import React from "react";
import "./Nav.css";

const Nav = () => {
  const links = [
    {
      name: "home",
      home: "/"
    },
    {
      name: "profile",
      path: "/profile"
    },
    {
      name: "about",
      path: "/about"
    }
  ];

  return (
    <div className="nav-container">
      <div className="linkList-container">
        {links.map((links) => {
          return <>{links.name}</>;
        })}
      </div>
    </div>
  );
};

export default Nav;
