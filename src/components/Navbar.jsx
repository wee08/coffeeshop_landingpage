import { useEffect, useState } from "react";
import { motion } from "motion/react";
const Navbar = () => {
  const navbars = [
    { title: "Home", path: "home" },
    { title: "Story", path: "story" },
    { title: "Menu", path: "menu" },
    { title: "Location", path: "location" },
    { title: "Contact", path: "contact" },
  ];

  const [isActiveIdx, setisActiveIdx] = useState(false);
  const [isShowBg, setIsShowBg] = useState(false);
  let [scrollPos, setScrollPos] = useState(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const pos = window.scrollY;
      setScrollPos(pos);
      setIsShowBg(pos >= 180 ? true : false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showBgClass =
    " transition-all duration-300 ease bg-navbg/30 backdrop-blur-xs border border-white/90 rounded-full";
  const hoverClass =
    "relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-primary after:scale-x-0 after:origin-center after:transition-transform after:duration-300 hover:after:scale-x-100";
  const handleMouseEnter = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const enterFromLeft = e.clientX - rect.left < rect.width / 2;
    e.currentTarget.style.setProperty(
      "--origin",
      enterFromLeft ? "left" : "right",
    );
  };

  return (
    <nav>
      <div
        className={`flex justify-around text-nav max-w-200 px-10 py-1 mx-auto mt-10 
        ${isShowBg ? showBgClass : ""}
        `}>
        {navbars.map((nav, idx) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.6,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            key={idx}>
            <a
              className={`cursor-pointer text-primary float-left hover:${hoverClass} 
                ${isActiveIdx === idx ? "underline" : ""}
                `}
              href={`#${nav.path}`}
              onClick={(e) => handleMouseEnter(e)}>
              {nav.title}
            </a>
          </motion.div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
