import { Link, NavLink } from "react-router-dom";
import LinkButton from "./LinkButton";

const Nav = () => {
  return (
    <div className=" flex justify-between items-center h-[4rem] text-light mx-8 robo">
      <Link to={"/"}>
        <h1 className="block text-3xl hover:cursor-pointer">{"< TC />"}</h1>
      </Link>

      <div className="flex place-items-center justify-end gap-12 text-lg">
        <ul className="flex gap-12 hover:cursor-pointer">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "text-light-primary" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/solutions"}
              className={({ isActive }) =>
                isActive ? "text-light-primary" : ""
              }
            >
              Solutions
            </NavLink>
          </li>
          {/* <li>
            <NavLink
              to={"/portfolio"}
              className={({ isActive }) =>
                isActive ? "text-light-primary" : ""
              }
            >
              Portfolio
            </NavLink>
          </li> */}
          <li>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive ? "text-light-primary" : ""
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSdgDdxvvZJ07ips2sfpptqj6zNxMvW3uqBVqKnFkyxkEuAnyg/viewform"
          target="_blank"
        >
          <LinkButton
            text={"Get Started"}
            color={"bg-dark-primary"}
            padding={"py-2 px-4"}
            link="/get-started"
          ></LinkButton>
        </a>
      </div>
    </div>
  );
};

export default Nav;
