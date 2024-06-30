import { PropTypes } from "prop-types";

const Button = ({
  text = "click me",
  size = "size-lg",
  color = "bg-red-200",
  padding = "p-4",
  href = "#",
}) => {
  return (
    <a href={href}>
      <button
        className={`hover:cursor-pointer  hover:bg-dark-primary ${size} inline-block border-light-primary ${color} w-fit ${padding} rounded-full border-2 robo`}
      >
        {text}
      </button>
    </a>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  padding: PropTypes.string,
  href: PropTypes.string,
};

export default Button;
