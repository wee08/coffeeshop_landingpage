import React from "react";
import { Link } from "react-router";

const Navbar = () => {
  const navbars = [
    { title: "Home", path: "#" },
    { title: "Story", path: "#" },
    { title: "Menu", path: "#" },
    { title: "Location", path: "#" },
    { title: "Contact", path: "#" },
  ];

  return (
    <>
      <div className="flex justify-around text-nav max-w-174 mx-auto mt-20">
        {navbars.map((nav, idx) => (
          <div key={idx}>
            <Link className="cursor-pointer text-primary" to={nav.path}>
              {nav.title}
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Navbar;
