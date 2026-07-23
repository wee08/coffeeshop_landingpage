import Title from "../Title";
import hotlatte from "../../assets/img/hot_latte.png";
const Menu = () => {
  return (
    <>
      <Title
        title={"Menu"}
        des={"Grab one of our best seller"}
        w={"auto"}
        text={"center"}
      />
      <img src={hotlatte} alt="" />
    </>
  );
};

export default Menu;
