import pattern from "../../assets/img/footer_sitting.png";
import Ig from "../../assets/svg/instagram-stroke-rounded.svg?react";
import Fb from "../../assets/svg/square-f-stroke-rounded.svg?react";
import Tt from "../../assets/svg/tiktok-stroke-rounded.svg?react";
const Contact = () => {
  const contacts = [
    {
      icon: <Ig />,
      name: "iced_coffee",
      target: "#",
    },
    {
      icon: <Tt />,
      name: "iced_coffee",
      target:
        "https://www.tiktok.com/@coconut._080?is_from_webapp=1&sender_device=pc",
    },
    {
      icon: <Fb />,
      name: "iced_coffee",
      target: "#",
    },
  ];
  return (
    <div className="relative my-12.5 w-full h-[320px] bg-primary rounded-[25px] overflow-hidden">
      <div className="grid grid-cols-2 h-full grid-rows-1 overflow-hidden   ">
        <div className="self-center ml-20 border-r border-white">
          <div>
            {contacts.map((item, idx) => (
              <div key={idx} className="flex items-center gap-5 my-2">
                <div>{item.icon}</div>
                <a className="text-white text-nav" href={item.target}>
                  {item.name}
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="self-center flex items-center bg-white w-[522px] h-[60px] rounded-full pl-12 mx-auto">
          <input className="outline-none" type="text" placeholder="message" />
          <button
            className=" bg-btnprimary h-[61px] w-[141px] rounded-full text-white ml-auto"
            type="button">
            send
          </button>
        </div>
      </div>
      <div className="absolute bottom-0 inset-e-0 opacity-30">
        <img className=" size-[191px] " src={pattern} alt="" />
      </div>
      <p className="absolute bottom-0 inset-s-0 text-white ml-6 mb-4 opacity-20">
        copyright seanmanuntithya 2026
      </p>
    </div>
  );
};

export default Contact;
