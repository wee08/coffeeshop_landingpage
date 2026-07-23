import Title from "../Title";
import latte from "../../assets/img/hot_latte.png";
import americano from "../../assets/img/hot_americano.png";
import choco from "../../assets/img/hot_choco.png";
import lemon from "../../assets/img/hot_lemon.png";
import milk from "../../assets/img/hot_milk.png";
import matcha from "../../assets/img/hot_matcha.png";
import { useState } from "react";
import { ChevronLeft, ChevronRight, TextCursor } from "lucide-react";
const Menu = () => {
  const drinks = [
    { src: latte, alt: "hot latte" },
    { src: choco, alt: "hot chocolate" },
    { src: americano, alt: "hot americano" },
    { src: lemon, alt: "hot lemon" },
    { src: milk, alt: "hot milk" },
    { src: matcha, alt: "hot matcha" },
  ];

  const [index, setIndex] = useState(0);

  return (
    <>
      <Title
        title={"Menu"}
        des={"Grab one of our best seller"}
        w={"auto"}
        text={"center"}
      />
      <div className="mx-auto justify-center">
        <div className="items-center">
          <img className="w-117.5" src={latte} alt="" />
        </div>
        <div>
          <ChevronLeft
            size={80}
            strokeWidth={2}
            color="#432818"
            className="cursor-pointer hover:scale-120 transition-all  duration-100"
          />
          <ChevronRight
            size={80}
            strokeWidth={2}
            color="#432818"
            className="cursor-pointer hover:scale-120 transition-all  duration-100"
          />
        </div>
      </div>
    </>
  );
};

export default Menu;
