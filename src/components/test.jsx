import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import latte from "../assets/img/hot_latte.png";
import americano from "../assets/img/hot_americano.png";
import choco from "../assets/img/hot_choco.png";
import lemon from "../assets/img/hot_lemon.png";
import milk from "../assets/img/hot_milk.png";
import matcha from "../assets/img/hot_matcha.png";
import herbtea from "../assets/img/hot_herbtea.png";

const drinks = [
  { src: latte, name: "Hot Latte" },
  { src: choco, name: "Hot Chocolate" },
  { src: americano, name: "Hot Americano" },
  { src: lemon, name: "Hot Lemon" },
  { src: milk, name: "Hot Milk" },
  { src: matcha, name: "Hot Matcha" },
  { src: herbtea, name: "Hot Herb Tea" },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  return (
    <div className="flex flex-col items-center">
      {/* Carousel */}
      <div className="relative w-[900px] h-[550px] overflow-hidden"></div>

      {/* Controls */}
      <div className="flex items-center gap-20 mt-4">
        <ChevronLeft
          size={46}
          onClick={prev}
          className="cursor-pointer hover:scale-125 transition"
        />

        <h2 className="text-5xl font-bold text-[#4d2c1d]">
          {drinks[index].name}
        </h2>

        <ChevronRight
          size={46}
          onClick={next}
          className="cursor-pointer hover:scale-125 transition"
        />
      </div>
    </div>
  );
}
