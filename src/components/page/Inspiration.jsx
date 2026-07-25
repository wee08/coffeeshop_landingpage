import { ChevronLeft, ChevronRight } from "lucide-react";
import model1 from "../../assets/img/model_1.png";
import model2 from "../../assets/img/model_2.png";
import model3 from "../../assets/img/model_3.png";
import model4 from "../../assets/img/model_4.png";
import Title from "../Title";

const Inspiration = () => {
  const modelImgs = [
    { src: model1, name: "modle1" },
    { src: model2, name: "modle2" },
    { src: model3, name: "modle3" },
    { src: model4, name: "modle4" },
  ];

  const icons = [
    { icon: <ChevronLeft width={35} height={35} strokeWidth={2} /> },
    { icon: <ChevronRight width={35} height={35} strokeWidth={2} /> },
  ];

  return (
    <>
      <Title
        title={"Inspiration"}
        des={"Refresh yourself with our drink in the city"}
      />
      <div className="flex items-center justify-between ">
        {modelImgs.map((item, idx) => (
          <div
            className=" w-[314px] h-full overflow-hidden rounded-[50px]"
            key={idx}>
            <img
              className="w-[500px] h-[500px] object-cover"
              src={item.src}
              alt={item.name}
            />
          </div>
        ))}
      </div>
      <div className="w-full flex justify-end mt-[35px]">
        <div className="w-[314px] h-[60px] flex items-center justify-between">
          {icons.map((item, idx) => (
            <div className="w-[135px] h-[58px] flex items-center justify-center bg-none border-3 rounded-full cursor-pointer">
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Inspiration;
