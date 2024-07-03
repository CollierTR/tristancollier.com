import Button from "./Button";
import LinkButton from "./LinkButton";
import { PropTypes } from "prop-types";

const SplitSection = ({
  buttonText = "Click Me",
  flip = false,
  text = "this is the text",
  title = "new title",
  img = "https://placehold.co/400x400",
  link = false,
  button = false,
  linkOrHref = "#",
  imgWidth = "600px",
}) => {
  return (
    <div
      className={
        flip
          ? "flex items-center justify-center bg-red-200 w-5/11 my-16 md:my-32 w-11/12 mx-auto lg:flex-row-reverse gap-5 flex-col"
          : "flex items-center justify-center bg-red-200 w-5/11 my-16 md:my-32 w-11/12 mx-auto gap-5 flex-col lg:flex-row"
      }
      // "flex items-center justify-center gap-x-20 bg-red-200 w-5/1i my-40 w-11/12 mx-auto"
    >
      <div className="w-11/12 lg:w-6/12 flex flex-col gap-6 md:gap-6 lg:gap-12 place-items-center md:place-items-start">
        <h2 className="w-11/12 md:text-5xl text-4xl lg:text-6xl robo my-shadow lg:whitespace-nowrap text-pretty whitespace-normal lg:relative z-10 text-light-primary text-center md:text-start">
          {title}
        </h2>

        <p className="text-lg md:text-2xl  text-center md:text-start">{text}</p>

        {button && (
          <Button
            text={buttonText}
            color={"bg-dark-primary"}
            size={"lg:text-2xl md:text-xl"}
            padding={"lg:py-3 lg:px-10 px-4 py-2"}
            className="whitespace-nowrap relative"
            href={linkOrHref}
          ></Button>
        )}

        {link && (
          <LinkButton
            text={buttonText}
            size={"lg:text-2xl md:text-xl"}
            padding={"lg:py-3 lg:px-10 px-4 py-2"}
            color={"bg-dark-primary"}
            className="whitespace-nowrap relative"
            link={linkOrHref}
          ></LinkButton>
        )}
      </div>

      <div className="lg:grid place-content-center w-5/12 h-[500px] hidden ">
        <img src={img} width={imgWidth} />
      </div>
    </div>
  );
};

// Prop-type validation
SplitSection.propTypes = {
  title: PropTypes.string,
  buttonText: PropTypes.string,
  text: PropTypes.string,
  flip: PropTypes.bool,
  img: PropTypes.string,
  button: PropTypes.bool,
  link: PropTypes.bool,
  linkOrHref: PropTypes.string,
  imgWidth: PropTypes.string,
};

export default SplitSection;
