import Navbar from "./components/Navbar";
import Home from "./components/page/Home";
import Story from "./components/page/Story";
import Menu from "./components/page/Menu";
const App = () => {
  const components = [
    { item: <Home />, id: "home" },
    { item: <Story />, id: "story" },
    { item: <Menu />, id: "menu" },
  ];

  return (
    <>
      <div className="mx-12.5 my-10.5 max-w-360 max-h-1877.25 font-mono ">
        <Navbar />
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
