import Title from "../Title";
import latte from "../../assets/img/hot_latte.png";
import americano from "../../assets/img/hot_americano.png";
import choco from "../../assets/img/hot_choco.png";
import lemon from "../../assets/img/hot_lemon.png";
import milk from "../../assets/img/hot_milk.png";
import matcha from "../../assets/img/hot_matcha.png";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const Menu = () => {
  const drinks = [
    { src: latte, name: "hot latte" },
    { src: choco, name: "hot chocolate" },
    { src: americano, name: "hot americano" },
    { src: lemon, name: "hot lemon" },
    { src: milk, name: "hot milk" },
    { src: matcha, name: "hot matcha" },
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
      <div className="mx-auto text-primary flex flex-col justify-center items-center ">
        <div className="items-center">
          <img className="w-117.5" src={latte} alt="" />
        </div>
        <div className="w-171 flex items-center justify-center ">
          <ChevronLeft
            size={48}
            strokeWidth={3}
            color="#432818"
            className="cursor-pointer hover:scale-120 transition-all  duration-100"
          />
          <p className="font-semibold text-[64px] mx-21.25">Hot latte</p>
          <ChevronRight
            size={48}
            strokeWidth={3}
            color="#432818"
            className="cursor-pointer hover:scale-120 transition-all  duration-100"
          />
        </div>
      </div>
    </>
  );
};

export default Menu;
