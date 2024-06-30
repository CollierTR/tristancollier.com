import { Link } from "react-router-dom";
import { PropTypes } from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const PlanCard = ({
  planName = "Plan Name",
  planType = "plan type",
  price = 20,
  benifits = ["benifit 1", "benifit 2"],
  isPopular = false,
  description = "This is an awsome description of my amazing plan subscription!",
  listHeader = "plan includes:",
}) => {
  return (
    <div className="w-1/3">
      <div className=" border-dark-primary border-2 rounded-3xl flex flex-col gap-6 p-10 h-full w-full">
        <div className="flex justify-between place-items-center mb-2">
          <h2 className="text-light-primary robo my-shadow text-3xl font-bold">
            {planName}
          </h2>
          {isPopular && (
            <p className=" bg-primary rounded-full text-dark py-1 px-2">
              Most Popular
            </p>
          )}
        </div>
        <p>{description}</p>
        <p className="font-bold">
          <span className="text-4xl">${price.toLocaleString("en-US")} </span>
          <span>/{planType}</span>
        </p>
        <div className="flex justify-center">
          <Link className="bg-dark-primary robo py-2 w-full rounded-md text-center border-primary border text-lg hover:border-light-primary ">
            Get Started!
          </Link>
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-lg mt-1 text-primary">{listHeader}</p>
          <ul>
            {benifits.map(function (item) {
              return (
                <li key={item} className="my-1 text-nowrap">
                  <FontAwesomeIcon
                    icon={faCheck}
                    className="text-light-primary"
                  />
                  <span className="mx-3">{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

PlanCard.propTypes = {
  planName: PropTypes.string,
  price: PropTypes.number,
  benifits: PropTypes.array,
  isPopular: PropTypes.bool,
  description: PropTypes.string,
  planType: PropTypes.string,
  listHeader: PropTypes.string,
};

export default PlanCard;
