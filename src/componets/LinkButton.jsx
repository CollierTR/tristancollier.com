import { PropTypes } from "prop-types";

const LinkButton = ({
  text = "click me",
  size = "size-lg",
  color = "bg-red-200",
  padding = "p-4",
  link = "#",
}) => {
  return (
    <a href={link}>
      <button
        className={`hover:cursor-pointer  hover:bg-dark-primary ${size} inline-block border-light-primary ${color} w-fit ${padding} rounded-full border-2 robo`}
      >
        {text}
      </button>
    </a>
  );
};

LinkButton.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  padding: PropTypes.string,
  link: PropTypes.string,
};

export default LinkButton;
