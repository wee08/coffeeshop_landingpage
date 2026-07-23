const Navbar = () => {
  const navbars = [
    { title: "Home", path: "home" },
    { title: "Story", path: "story" },
    { title: "Menu", path: "menu" },
    { title: "Location", path: "location" },
    { title: "Contact", path: "contact" },
  ];

  return (
    <nav>
      <div className="flex justify-around text-nav max-w-174 mx-auto mt-20">
        {navbars.map((nav, idx) => (
          <div key={idx}>
            <a className="cursor-pointer text-primary" href={`#${nav.path}`}>
              {nav.title}
            </a>
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
