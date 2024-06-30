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
          ? "flex items-center justify-center bg-red-200 w-5/1i my-32 w-11/12 mx-auto flex-row-reverse gap-5"
          : "flex items-center justify-center bg-red-200 w-5/1i my-32 w-11/12 mx-auto gap-5"
      }
      // "flex items-center justify-center gap-x-20 bg-red-200 w-5/1i my-40 w-11/12 mx-auto"
    >
      <div className="w-6/12 flex flex-col gap-12">
        <h2 className="text-6xl robo my-shadow whitespace-nowrap relative z-10 text-light-primary">
          {title}
        </h2>

        <p className="text-2xl">{text}</p>

        {button && (
          <Button
            text={buttonText}
            color={"bg-dark-primary"}
            size={"text-2xl"}
            padding={"py-3 px-10"}
            className="whitespace-nowrap relative"
            href={linkOrHref}
          ></Button>
        )}

        {link && (
          <LinkButton
            text={buttonText}
            color={"bg-dark-primary"}
            size={"text-2xl"}
            padding={"py-3 px-10"}
            className="whitespace-nowrap relative"
            link={linkOrHref}
          ></LinkButton>
        )}
      </div>

      <div className="grid place-content-center w-5/12 h-[500px]">
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
