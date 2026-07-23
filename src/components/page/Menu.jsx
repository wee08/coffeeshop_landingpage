import Title from "../Title";
import latte from "../../assets/img/hot_latte.png";
import americano from "../../assets/img/hot_americano.png";
import choco from "../../assets/img/hot_choco.png";
import lemon from "../../assets/img/hot_lemon.png";
import milk from "../../assets/img/hot_milk.png";
import matcha from "../../assets/img/hot_matcha.png";
import { useState } from "react";
import { ChevronLeft, ChevronRight, ColumnsSettings } from "lucide-react";
const Menu = () => {
  const drinks = [
    { src: latte, name: "hot latte" },
    { src: choco, name: "hot chocolate" },
    { src: americano, name: "hot americano" },
    { src: lemon, name: "hot lemon" },
    { src: milk, name: "hot milk" },
    { src: matcha, name: "hot matcha" },
  ];

  let [index, setIndex] = useState(0);

  if (index >= drinks.length - 1) {
    setIndex(0);
  }
  const handleChevronLeft = () => {
    setIndex((index) => index - 1);
  };
  const handleChevronRight = () => {
    setIndex((index) => index + 1);
  };

  return (
    <>
      <Title
        title={"Menu"}
        des={"Grab one of our best seller"}
        w={"auto"}
        text={"center"}
      />
      <div className="mx-auto text-primary flex flex-col justify-center items-center ">
        <div className="items-center">
          <img
            className="w-117.5"
            src={drinks[index].src}
            alt={drinks[index].name}
          />
        </div>
        <div className="w-180 flex items-center justify-between ">
          <ChevronLeft
            size={48}
            strokeWidth={3}
            color="#432818"
            className="cursor-pointer hover:scale-120 transition-all  duration-100"
            onClick={handleChevronLeft}
          />
          <p className="font-medium text-[60px] ">{drinks[index].name}</p>
          <ChevronRight
            size={48}
            strokeWidth={3}
            color="#432818"
            className="cursor-pointer hover:scale-120 transition-all  duration-100"
            onClick={handleChevronRight}
          />
        </div>
      </div>
    </>
  );
};

export default Menu;
