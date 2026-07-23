import React from "react";
import hero from "../../assets/img/hero.jpg";
const Home = () => {
  return (
    <>
      <div className="mx-auto flex flex-col items-center text-primary">
        <h1 className="text-header font-bold my-primary">ICED COFFEE</h1>
        <p className="text-nav">Refresh yourself with our drink in the city</p>
        <a
          className="bg-btnprimary  w-89 h-20.5 text-nav flex items-center justify-center text-white border-[5px] border-primary rounded-full my-primary"
          href="#">
          Grab Now
        </a>
        <div className="w-345 h-auto rounded-[50px] overflow-hidden">
          <img className="w-full rounded-12.5" src={hero} alt="hero-image" />
        </div>
      </div>
    </>
  );
};

export default Home;
