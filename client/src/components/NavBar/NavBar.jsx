import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import { useAuth } from "../../hooks/useAuth";
import AvatarDropdown from "../AvatarDropdown/AvatarDropdown";

const NavBar = () => {
  const { isAuthenticated } = useAuth();
  const location = useLocation().pathname.slice(11);

  const [menuIsOpen, setMenuIsOpen] = useState(true);

  const links = [];

  const toggleMenu = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  const navStyles = {
    isActive: "mx-2 font-bold ",
    pending: "mx-2",
  };

  return (
    <nav
      className={` flex flex-row items-center w-full  p-2 justify-between h-16 relative border-b-2 border-black  `}
    >
      {!menuIsOpen ? (
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      ) : (
        <button className="md:hidden" onClick={toggleMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      )}
      <Link to="/" className="">
        <div className=" font-semibold  text-xl ml-[24px]  ">
          {location
            .charAt(0)
            .toLocaleUpperCase()
            .concat(location.slice(1))
            .split("/")[0] || "Dashboard"}
        </div>
      </Link>
      <ul
        className={`${
          menuIsOpen
            ? "hidden"
            : "flex flex-col absolute top-16 left-0 w-full z-10 bg-white"
        }  md:visible md:flex md:static md:flex-row md:w-auto p-2  `}
      >
        {links.map((el, i) => (
          <NavLink
            key={i}
            to={el.to}
            onClick={toggleMenu}
            className={`${({ isActive }) =>
              isActive
                ? navStyles.isActive
                : navStyles.pending} hover:bg-black hover:text-white px-2 rounded-lg`}
          >
            {el.name}
          </NavLink>
        ))}
      </ul>
      <ul className="flex flex-row gap-1 justify-center items-center">
        {!isAuthenticated && (
          <li className="px-2">
            <AvatarDropdown />
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavBar;
