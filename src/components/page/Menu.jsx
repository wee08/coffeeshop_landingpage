import Title from "../Title";
import latte from "../../assets/img/hot_latte.png";
import americano from "../../assets/img/hot_americano.png";
import choco from "../../assets/img/hot_choco.png";
import lemon from "../../assets/img/hot_lemon.png";
import milk from "../../assets/img/hot_milk.png";
import matcha from "../../assets/img/hot_matcha.png";
const Menu = () => {
  const drinks = [
    { src: latte, alt: "hot latte" },
    { src: choco, alt: "hot chocolate" },
    { src: americano, alt: "hot americano" },
    { src: lemon, alt: "hot lemon" },
    { src: milk, alt: "hot milk" },
    { src: matcha, alt: "hot matcha" },
  ];

  return (
    <>
      <Title
        title={"Menu"}
        des={"Grab one of our best seller"}
        w={"auto"}
        text={"center"}
      />
      <div className="carousel rounded-box">
        {drinks.map((i, idx) => (
          <div className="carousel-item" key={idx}>
            <img className="w-117.5" src={i.src} alt="" />
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
