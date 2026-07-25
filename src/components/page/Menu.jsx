import Carousel from "../Carousel";
import Title from "../Title";
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
    </>
  );
};

export default Menu;
