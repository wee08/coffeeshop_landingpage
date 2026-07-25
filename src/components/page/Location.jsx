import Title from "../Title";
import { MapPinIcon } from "lucide-react";
import loc from "../../assets/img/map.png";
const Location = () => {
  const icons = [
    {
      icon: <MapPinIcon width={51} height={51} strokeWidth={2} />,
      info: "Toul Kork, Phnom Penh",
    },
    {
      icon: <MapPinIcon width={51} height={51} strokeWidth={2} />,
      info: "Sen Sok, Phnom Penh",
    },
  ];

  return (
    <>
      <Title title={"Location"} des={"Bold coffee for people who move fast"} />
      <div className="grid-cols-2 grid-rows-2 w-full flex justify-between items-start ">
        <div className="col-1 row-1">
          {icons.map((item, idx) => (
            <div key={idx} className="mb-10">
              <div className="flex items-center justify-start  gap-10">
                {item.icon}
                <p className="text-nav">{item.info}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-primary w-[791px] h-[520px] rounded-[50px] flex items-center overflow-hidden col-2 row-1">
          <img
            className="w-[1000px] h-auto object-bottom-right"
            src={loc}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Location;
