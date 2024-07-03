import LinkButton from "./LinkButton";
import chart from "../assets/Take_your_business_to_the_next_level___1_-removebg-preview.png";

const Hero = () => {
  return (
    <div className="flex justify-center items-center lg:gap-x-20 my-20 flex-col lg:flex-row">
      <div className=" w-10/12 lg:w-5/12 flex flex-col md:gap-6 lg:gap-12 gap-4 place-items-center md:place-items-start">
        <h1 className="md:text-left text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl lg:whitespace-nowrap text-pretty relative z-10 text-light-primary my-shadow rob">
          Take your business to the next level!
        </h1>

        <p className="sm:text-xl lg:text-2xl md:text-start text-center">
          Are you wanting to take the next step with your business? Do you feel
          like you&apos;re missing a key element that would take your business
          to the next level? Do you have a website that is focused on converting
          your visitors to customers? Do you have a strong sales funnel in place
          to help drive sales? If not, I can help take your business to the next
          level!
        </p>

        <div className="flex gap-5 lg:whitespace-nowrap text-pretty">
          <LinkButton
            text={"Free Consultation!"}
            color={"bg-dark-primary"}
            size={"lg:text-2xl md:text-xl"}
            padding={"lg:py-3 lg:px-10 px-4 py-2"}
            link="/get-started"
          ></LinkButton>
          {/* <Button
            text={"Testomonials"}
            padding={"py-3 px-10"}
            size={"text-2xl"}
          ></Button> */}
        </div>
      </div>
      <img
        src={chart}
        alt="chart img"
        className="p-1 relative hidden lg:block"
      />
    </div>
  );
};

export default Hero;
