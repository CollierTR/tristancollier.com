import PlanCard from "./PlanCard";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

//this is the arr of objs that control the plan cards
const servicePlansArr = [
  {
    name: "Basic",
    monthlyPrice: 67,
    yearlyPrice: 737,
    description: "A basic plan covering the essentials",
    benifits: [
      "Hosting",
      "Security",
      "1hr/mo of free website updates",
      "Yearly Strategy Consultation",
    ],
    isPopular: false,
    key: 1,
    listHeader: "This Plan Includes:",
  },
  {
    name: "Premium",
    monthlyPrice: 97,
    yearlyPrice: 1067,
    description: "A premium plan to drive growth",
    benifits: [
      "Basic Website Analyitics",
      '"Google my Business" Optimization',
      "2hrs/mo of free website updates",
      "Bi-annual Strategy Meeting",
      "10% discount on all other services!",
    ],
    isPopular: false,
    key: 2,
    listHeader: "Everything in Basic Plus:",
  },
  {
    name: "Advanced",
    monthlyPrice: 147,
    yearlyPrice: 1617,
    description: "A plan that will crush your competition!",
    benifits: [
      "Advanced Website Analytics",
      "We provide placeholder copy",
      "SEO Boost",
      "IT Support",
      "Reputation Management",
      "Lead Funnel design",
      "5hr/mo of free website updates",
      "Bi-monthly Strategy Meeting",
      "20% discount on all other services",
    ],
    isPopular: false,
    key: 3,
    listHeader: "Everything in Advanced Plus:",
  },
];

const PlansList = ({ monthly = false, yearly = false }) => {
  return (
    <div className="flex flex-col justify-center items-center gap-6 sm:gap-16 my-20 w-10/12">
      <h1 className="text-5xl sm:text-6xl text-pretty relative z-10 text-light-primary my-shadow robo center">
        Business Growth Plans
      </h1>
      <p className="text-2xl sm:text-2xl text-pretty text-center">
        Choose an affordable plan that&apos;s packed with the best features to
        help you grow your bussiness.
      </p>
      {/* switch button */}
      <div className="flex mt-10 gap-4 border-2 px-1 border-dark-primary rounded-full p-1 place-items-center">
        <NavLink
          to={"/plans/monthly"}
          className={({ isActive }) =>
            isActive
              ? "bg-light-primary rounded-full px-2 py-2 text-dark"
              : "py-2 px-2"
          }
        >
          Monthly
        </NavLink>
        <NavLink
          to={"/plans/yearly"}
          className={({ isActive }) =>
            isActive
              ? "bg-light-primary rounded-full px-2 py-2 text-dark"
              : "py-2 px-2"
          }
        >
          Annually
        </NavLink>
      </div>

      {/* This could be it's own componet... */}

      {monthly && (
        <div className="flex gap-10 justify-stretch  lg:max-w-none lg:w-full lg:flex-row flex-col place-items-stretch lg:place-items-stretch">
          {servicePlansArr.map(function (plan) {
            return (
              <PlanCard
                key={plan.key}
                planName={plan.name}
                benifits={plan.benifits}
                price={plan.monthlyPrice}
                isPopular={plan.isPopular}
                description={plan.description}
                planType="month"
                listHeader={plan.listHeader}
              />
            );
          })}
        </div>
      )}

      {yearly && (
        <div className="flex gap-10 justify-stretch  lg:max-w-none lg:w-full lg:flex-row flex-col place-items-stretch lg:place-items-stretch">
          {servicePlansArr.map(function (plan) {
            return (
              <PlanCard
                key={plan.key}
                planName={plan.name}
                benifits={plan.benifits}
                price={plan.yearlyPrice}
                isPopular={plan.isPopular}
                description={plan.description}
                planType="year"
                listHeader={plan.listHeader}
              />
            );
          })}
        </div>
      )}
      {/* end of componet */}
    </div>
  );
};

PlansList.propTypes = {
  monthly: PropTypes.bool,
  yearly: PropTypes.bool,
};

export default PlansList;
