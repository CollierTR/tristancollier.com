import LinkButton from "./LinkButton";
import chart from "../assets/Take_your_business_to_the_next_level___1_-removebg-preview.png";

const Hero = () => {
  return (
    <div className="flex justify-center items-center gap-x-20 my-20">
      <div className="w-5/12 flex flex-col gap-12">
        <h1 className="text-6xl whitespace-nowrap relative z-10 text-light-primary my-shadow rob">
          Take your business to the next level!
        </h1>

        <p className="text-2xl">
          Are you wanting to take the next step with your business? Do you feel
          like you&apos;re missing a key element that would take your business
          to the next level? Have a website that is focused on converting your
          visitors to customers? Do you have strong tested funnel in place to
          drive cells? If not, I can help take your business to the next level!
        </p>

        <div className="flex gap-5 whitespace-nowrap">
          <LinkButton
            text={"Free Consultation!"}
            color={"bg-dark-primary"}
            size={"text-2xl"}
            padding={"py-3 px-10"}
            link="/get-started"
          ></LinkButton>
          {/* <Button
            text={"Testomonials"}
            padding={"py-3 px-10"}
            size={"text-2xl"}
          ></Button> */}
        </div>
      </div>
      <img src={chart} alt="chart img" className="p-1 relative" />
    </div>
  );
};

export default Hero;
