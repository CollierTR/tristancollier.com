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
    <div>
      <div className=" border-dark-primary border-2 rounded-3xl flex flex-col gap-3 sm:gap-6 p-4 sm:p-10 lg:h-full lg:w-full text-center sm:text-start">
        <div className="flex justify-between place-items-center mb-2">
          {/* Plan title? */}
          <h2 className="text-light-primary robo my-shadow text-2xl sm:text-3xl font-bold">
            {planName}
          </h2>

          {/* Controls the "popular tag" */}
          {isPopular && (
            <p className=" bg-primary rounded-full text-dark py-1 px-2">
              Most Popular
            </p>
          )}
        </div>

        {/* Plan description */}
        <p className="text-balance text-sms sm:text-base">{description}</p>

        {/* Plan Price */}
        <p className="font-bold">
          <span className="text-3xl sm:text-4xl">
            ${price.toLocaleString("en-US")}{" "}
          </span>
          <span>/{planType}</span>
        </p>

        {/* Button */}
        <div className="flex justify-center">
          <Link className="bg-dark-primary robo py-2 w-full rounded-md text-center border-primary border text-base sm:text-lg hover:border-light-primary ">
            Get Started!
          </Link>
        </div>

        <div className="flex flex-col gap-1">
          {/* Plan List header */}
          <p className="text-base sm:text-lg mt-1 text-primary text-pretty">
            {listHeader}
          </p>

          {/* Plan list items */}
          <ul className="flex flex-col gap">
            {benifits.map(function (item) {
              return (
                <li
                  key={item}
                  className="my-1 text-pretty text-xs sm:text-base"
                >
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
