import hero from "../../assets/img/hero.jpg";
import Title from "../Title";
const Home = () => {
  return (
    <>
      <div className="mx-auto flex flex-col items-center text-primary">
        <Title
          title={"ICED COFFEE"}
          des={"Refresh yourself with our drink in the city"}
        />
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
