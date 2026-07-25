import { Clock3, ThumbsUp } from "lucide-react";
import coffee from "../../assets/img/model_drink.png";
const MenuHero = () => {
  const info = [
    {
      icon: <Clock3 width={95} height={95} strokeWidth={2} color={"#432818"} />,
      title: "Open",
      des: "Mon - Sun",
      time: "7:00 AM - 10:00 PM",
    },
    {
      icon: (
        <ThumbsUp width={95} height={95} strokeWidth={2} color={"#432818"} />
      ),
      title: "Feedback",
      des: "Nice drink, rich coffee, Friendly environment",
      time: "",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-2 grid-rows-2 w-[1350px] h-[610px] my-20 gap-20 ">
        <div
          className="w-[658px] h-[583px] rounded-[50px] bg-[#D9D9D9] 
        flex justify-center items-center">
          <img
            className="grid-span-2 w-[505px] h-[505px] rotate-14"
            src={coffee}
            alt=""
          />
        </div>
        <div className="w-[626px] h-auto row-span-2 place-content-center">
          {info.map((item, idx) => (
            <div className="flex  items-center my-10 gap-20" key={idx}>
              {item.icon}
              <div className="w-[485px] h-auto">
                <h2 className="text-4xl">{item.title}</h2>
                <p className="text-2xl">
                  {item.des}
                  <br />
                  {item.time === "" ? "" : item.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MenuHero;
