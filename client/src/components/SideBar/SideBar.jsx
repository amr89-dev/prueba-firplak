import { NavLink, useLocation } from "react-router-dom";

const SideBar = () => {
  const location = useLocation().pathname.slice(11);

  return (
    <section className=" w-56 h-[calc(100vh_-_64px)] border">
      <nav className="flex flex-col items-center">
        <NavLink
          to="/dashboard/guias"
          id="hotel"
          className={`flex w-full py-4 px-5 justify-start items-center gap-3 self-stretch hover:bg-blue-700 hover:text-white ${
            location === "hotel" ? "bg-blue-700 text-white" : ""
          }`}
        >
          ⚡ <p className=" leading-5 font-medium">Guias</p>
        </NavLink>
      </nav>
    </section>
  );
};

export default SideBar;
