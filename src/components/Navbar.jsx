import React from "react";

const Navbar = () => {
  const navbars = [
    { title: "Home", link: "#" },
    { title: "Story", link: "#" },
    { title: "Menu", link: "#" },
    { title: "Location", link: "#" },
    { title: "Contact", link: "#" },
  ];

  return (
    <>
      <div className="flex justify-around text-nav min-w-93  ">
        {navbars.map((nav) => (
          <link className="cursor-pointer" to>
            {nav.title}
          </link>
        ))}
      </div>
    </>
  );
};

export default Navbar;
