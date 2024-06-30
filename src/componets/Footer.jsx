import LinkButton from "./LinkButton";
import gmail from "../assets/gmail.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";

const Footer = () => {
  return (
    <div>
      <div className="grid place-content-center my-20">
        <div className="flex flex-col justify-center place-items-center gap-10">
          <h3 className="text-4xl">Schedule a free consultation!</h3>
          <LinkButton
            text="Get Started Today!"
            color="bg-dark-primary"
            size="text-2xl"
            padding="py-3 px-10"
            link="/get-started"
          ></LinkButton>
        </div>
      </div>
      <div className="flex"></div>
      <div className="flex justify-between place-items-center w-10/12 mx-auto my-6">
        <p className="text-lg">© 2024 Tristan Collier</p>
        <div className="flex gap-3 w-1/6 justify-evenly place-items-center">
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
