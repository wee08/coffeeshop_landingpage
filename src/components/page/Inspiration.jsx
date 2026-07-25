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

  return (
    <>
      <Title
        title={"Inspiration"}
        des={"Refresh yourself with our drink in the city"}
      />
      <div className="flex flex-wrap items-center justify-center">
        {modelImgs.map((item, idx) => (
          <div
            className="m-4 bg-black w-[314px] h-[416px] overflow-hidden rounded-[50px]"
            key={idx}>
            <img
              className="w-[500px] h-[500px]  object-cover"
              src={item.src}
              alt={item.name}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Inspiration;
