import { useState } from "react";
import "./styles.css";
import { useAuth } from "../../hooks/useAuth";

const AvatarDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logOut } = useAuth();
  return (
    <section className="relative flex flex-row items-center justify-center">
      <div
        className="  cursor-pointer"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-[34px] h-[34px]"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <ul
        className={`absolute border-2 border-black p-4 rounded-lg bg-white dropdown right-[-9px] top-[50px] w-40 z-10 shadow-2xl ${
          isOpen ? "visible" : "hidden"
        }`}
      >
        <li>
          <button
            onClick={() => {
              logOut();
            }}
          >
            Cerrar Sesión
          </button>
        </li>
      </ul>
    </section>
  );
};

export default AvatarDropdown;
