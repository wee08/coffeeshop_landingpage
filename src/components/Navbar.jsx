import { useEffect, useState } from "react";

const Navbar = () => {
  const navbars = [
    { title: "Home", path: "home" },
    { title: "Story", path: "story" },
    { title: "Menu", path: "menu" },
    { title: "Location", path: "location" },
    { title: "Contact", path: "contact" },
  ];

  const [isActive, setIsActive] = useState(false);
  const [isShowBg, setIsShowBg] = useState(false);
  let [scrollPos, setScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY;
      setScrollPos(pos);
      setIsShowBg(pos >= 200 ? true : false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showBgClass =
    "bg-navbg/30 backdrop-blur-md border border-white/90 rounded-2xl shadow-md px-6";

  return (
    <nav>
      <div
        className={`flex justify-around text-nav max-w-174 mx-auto mt-20 -z-10
        ${isShowBg ? showBgClass : ""}
        `}>
        {navbars.map((nav, idx) => (
          <div key={idx}>
            <a
              className="cursor-pointer text-primary float-left"
              href={`#${nav.path}`}>
              {nav.title}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
