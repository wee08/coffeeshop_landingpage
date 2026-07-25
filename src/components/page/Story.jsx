import Title from "../Title";
import vdo from "../../assets/vid/baking_coffee.mp4";
const Story = () => {
  const des =
    "Rain tapped the window as Mira wiped down the counter, the last customer long gone. The espresso machine hissed once more, out of habit. Outside, city lights blurred gold through the glass. She poured herself a small cup, sat by the door, and watched the street breathe.";
  return (
    <>
      <Title title={"Story"} des={des} w={1010} align={"justify"} />
      <div className="w-full flex justify-between text-nav">
        <p>We make coffee with passion</p>
        <div className="w-205.75 h-151 overflow-hidden rounded-[50px]">
          <video
            className="w-full h-full object-cover "
            src={vdo}
            autoPlay
            loop
            muted
            typeof="video/mp4"></video>
        </div>
      </div>
    </>
  );
};

export default Story;
