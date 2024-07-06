import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import LinkButton from "./LinkButton";
import { useState } from "react";

const Nav = () => {
  const [mobileNav, setMobileNav] = useState(false);

  function handleMobileNavOpen() {
    setMobileNav(true);
  }

  function handleMobileNavClose() {
    setMobileNav(false);
  }

  return (
    // mobile nav open menu
    <div>
      {mobileNav && (
        <div
          className="absolute size-full bg-dark z-50 p-4 grid place-content-center"
          onClick={handleMobileNavClose}
        >
          {/* close btn  */}
          <div className="absolute right-4 top-4">
            <FontAwesomeIcon icon={faXmark} className="text-light text-3xl" />
          </div>

          <ul className=" flex flex-col text-center text-4xl gap-4 justify-evenly place-items-center">
            <li className="mb-4">
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive ? "text-light-primary" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li className="m-4">
              <NavLink
                to={"/solutions"}
                className={({ isActive }) =>
                  isActive ? "text-light-primary" : ""
                }
              >
                Solutions
              </NavLink>
            </li>

            <li className="m-4">
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
        </div>
      )}

      {/* Mobile Navigation Closed */}
      <div className="flex md:hidden justify-between mx-8 robo py-4 place-items-center">
        <Link to={"/"}>
          <h1 className="block text-xl hover:cursor-pointer">{"< TC />"}</h1>
        </Link>
        <div onClick={handleMobileNavOpen}>
          <FontAwesomeIcon icon={faBars} className="text-light text-3xl" />
        </div>
      </div>

      {/* Desktop Navigation */}
      <div className=" md:flex justify-between items-center h-[4rem] text-light mx-8 robo hidden">
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
    </div>
  );
};

export default Nav;
