import LinkButton from "./LinkButton";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Footer = () => {
  return (
    <div>
      <div className="grid place-content-center my-4 md:my-10 lg:my-16">
        <div className="flex flex-col justify-center place-items-center gap-4 smd:gap-8 lg:gap-10">
          <h3 className="text-xl md:text-3xl lg:text-4xl text-center md:text-start">
            Schedule a free consultation!
          </h3>
          <LinkButton
            text="Get Started Today!"
            color="bg-dark-primary"
            size="md:text-xl lg:text-2xl"
            padding="md:py-3 md:px-10 py-2 px-4"
            link="/get-started"
          ></LinkButton>
        </div>
      </div>
      <div className="flex justify-between place-items-center w-10/12 mx-auto mt-12 mb-3 flex-row gap-3">
        <p className="text-sm md:text-lg">© 2024 Tristan Collier</p>
        <div className="flex gap-3 w-1/2 sm:w-2/6 md:w-1/6 xl:size-1/12 justify-evenly place-items-center">
          <a href="mailto:tristancollier777@gmail.com" target="_blank">
            <img width={"80%"} src={gmail} alt="Gmail Logo" />
          </a>
          <a
            href="https://www.linkedin.com/in/tristan-collier-263b67263/"
            target="_blank"
          >
            <img width={"80%"} src={linkedin} alt="LinkedIn Logo" />
          </a>
          <a href="https://github.com/CollierTR" target="_blank">
            <img width={"80%"} src={github} alt="Github Logo" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
