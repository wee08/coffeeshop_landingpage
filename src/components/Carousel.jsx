import latte from "../assets/img/hot_latte.png";
import americano from "../assets/img/hot_americano.png";
import choco from "../assets/img/hot_choco.png";
import lemon from "../assets/img/hot_lemon.png";
import milk from "../assets/img/hot_milk.png";
import matcha from "../assets/img/hot_matcha.png";
import herbtea from "../assets/img/hot_herbtea.png";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
const Carousel = () => {
  const drinks = [
    { src: latte, name: "hot latte" },
    { src: choco, name: "hot chocolate" },
    { src: americano, name: "hot americano" },
    { src: lemon, name: "hot lemon" },
    { src: milk, name: "hot milk" },
    { src: matcha, name: "hot matcha" },
    { src: herbtea, name: "hot herb tea" },
  ];

  let [index, setIndex] = useState(0);

  const handleChevronLeft = () => {
    setIndex((prev) => (prev === 0 ? max_idx : prev - 1));
  };
  const handleChevronRight = () => {
    setIndex((prev) => (prev === max_idx ? 0 : prev + 1));
  };
  const max_idx = drinks.length - 1;
  const midIdx = Math.floor(drinks.length / 2);

  const POSITIONS = {
    0: { x: 0, y: 300 },
    [-1]: { x: -100, y: 200 },
    [1]: { x: 100, y: 200 },
    [-2]: { x: 30, y: 80 },
    [2]: { x: -30, y: 80 },
    [-3]: { x: 350, y: -70 },
    [3]: { x: -350, y: -70 },
  };

  return (
    <div className="mx-auto text-primary flex flex-col justify-center items-center ">
      <div className="flex  items-center justify-center w-284.25 h-210.25 relative">
        {drinks.map((item, idx) => {
          const offset = idx - midIdx;
          const pos = POSITIONS[offset] ?? { x: 0, y: -300 };
          return (
            <img
              key={idx}
              className=" w-40  transition-all duration-300 ease-in-out"
              src={item.src}
              alt={item.name}
              style={{
                transform: `${`translate(${pos.x}px,${pos.y}px)`}`,
              }}
            />
          );
        })}
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
  );
};

export default Carousel;
