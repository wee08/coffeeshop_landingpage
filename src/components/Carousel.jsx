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
    { src: choco, name: "hot chocolate" },
    { src: americano, name: "hot americano" },
    { src: lemon, name: "hot lemon" },
    { src: latte, name: "hot latte" },
    { src: milk, name: "hot milk" },
    { src: matcha, name: "hot matcha" },
    { src: herbtea, name: "hot herb tea" },
  ];
  const [startIndex, setStartIndex] = useState(0);
  const rotateDrinks = drinks.map(
    (_, i) => drinks[(startIndex + i) % drinks.length],
  );

  const midIdx = Math.floor(drinks.length / 2);

  const POSITIONS = {
    0: { x: 0, y: 300 },
    [-1]: { x: -100, y: 200 },
    [1]: { x: 100, y: 200 },
    [-2]: { x: 30, y: 50 },
    [2]: { x: -30, y: 50 },
    [-3]: { x: 350, y: -70 },
    [3]: { x: -350, y: -70 },
  };
  const handleChevronRight = () =>
    setStartIndex((prev) => (prev + 1) % drinks.length);

  const handleChevronLeft = () =>
    setStartIndex((prev) => (prev - 1 + drinks.length) % drinks.length);

  return (
    <div className="mx-auto text-primary flex flex-col justify-center items-center font-mono font-extralight  ">
      <div className="grid grid-cols-7 grid-rows-5 place-items-center w-284.25 h-210.25 mb-20 ">
        {rotateDrinks.map((item, idx) => {
          return (
            <div
              key={idx}
              className={`content-center ${
                idx === midIdx ? "col-4 row-5 w-117.5"
                : idx === 4 ? "col-7 row-4 w-[350px] blur-[1.2px]"
                : idx === 5 ? "col-6 row-2 w-[270px] blur-[1.8px]"
                : idx === 6 ? "col-3 row-1 w-[170px] blur-[2px]"
                : idx === 2 ? "col-5 row-1 w-[170px] blur-[2px]"
                : idx === 0 ? "col-2 row-2 w-[270px] blur-[1.8px]"
                : idx === 1 ? "col-1 row-4 w-[350px] blur-[1.2px]"
                : ""
              }`}>
              <img className="items-center w-full" src={item.src} alt="" />
            </div>
          );
        })}
      </div>
      <div className="w-180 flex items-center justify-between mt-12">
        <ChevronLeft
          size={48}
          strokeWidth={3}
          color="#432818"
          className="cursor-pointer hover:scale-120 transition-all  duration-100"
          onClick={handleChevronLeft}
        />
        <p className="font-medium text-[60px] ">{rotateDrinks[midIdx].name}</p>
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
