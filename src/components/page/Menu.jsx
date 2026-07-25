import Carousel from "../Carousel";
import Title from "../Title";
import Inspiration from "./Inspiration";
import MenuHero from "./MenuHero";

const Menu = () => {
  return (
    <>
      <Title
        title={"Menu"}
        des={"Grab one of our best seller"}
        w={"auto"}
        text={"center"}
      />
      <Carousel />
      <MenuHero />
      <Inspiration />
    </>
  );
};

export default Menu;
