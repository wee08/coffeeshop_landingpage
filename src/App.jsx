import Navbar from "./components/Navbar";
import Home from "./components/page/Home";
import Story from "./components/page/Story";
import Menu from "./components/page/Menu";
import Location from "./components/page/Location";
import Contact from "./components/page/Contact";
const App = () => {
  const components = [
    { item: <Home />, id: "home" },
    { item: <Story />, id: "story" },
    { item: <Menu />, id: "menu" },
    { item: <Location />, id: "location" },
    { item: <Contact />, id: "contact" },
  ];

  return (
    <>
      <div className="mx-12.5 my-10.5 max-w-360 min-h-1877.25 font-mono ">
        <div className="sticky top-0 overflow-hidden z-100">
          <Navbar />
        </div>
        {components.map((i, idx) => (
          <section className="" key={idx} id={i.id}>
            {i.item}
          </section>
        ))}
      </div>
    </>
  );
};

export default App;
