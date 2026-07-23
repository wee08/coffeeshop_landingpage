import { Route, Routes } from "react-router";
import Navbar from "./components/Navbar";
import Home from "./components/page/Home";
import Story from "./components/page/Story";
const App = () => {
  const components = [
    { item: <Home />, id: "home" },
    { item: <Story />, id: "story" },
  ];

  return (
    <>
      <div className="mx-12.5 my-10.5 max-w-360 max-h-1877.25 font-mono ">
        <Navbar />
        {components.map((i, idx) => (
          <section className="" key={idx}>
            {i.item}
          </section>
        ))}
      </div>
    </>
  );
};

export default App;
