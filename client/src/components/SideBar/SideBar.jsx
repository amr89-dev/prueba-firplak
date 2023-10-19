import { Link, NavLink, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";

const SideBar = () => {
  const location = useLocation().pathname.slice(11);

  return (
    <section className="w-80 h-screen border bg-black text-white flex flex-col items-center shadow-sm">
      <Link
        to="/dashboard"
        className="h-16 p-4  flex items-center justify-center"
      >
        <div className=" font-bold  text-2xl flex flex-row gap-2 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="orange"
            className="w-7 h-7"
          >
            <path
              fillRule="evenodd"
              d="M14.615 1.595a.75.75 0 01.359.852L12.982 9.75h7.268a.75.75 0 01.548 1.262l-10.5 11.25a.75.75 0 01-1.272-.71l1.992-7.302H3.75a.75.75 0 01-.548-1.262l10.5-11.25a.75.75 0 01.913-.143z"
              clipRule="evenodd"
            />
          </svg>
          TraceApp
        </div>
      </Link>
      <nav className="flex flex-col items-center w-full">
        <NavLink
          to="/dashboard"
          id="dashboard"
          className={`flex w-full py-4 px-5  flex-row justify-start items-center gap-2 hover:bg-gray-700 hover:text-white ${
            location === "dashboard" ? "bg-gray-700 text-white" : ""
          }`}
        >
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
              d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z"
            />
          </svg>

          <p className=" leading-5 font-medium">General</p>
        </NavLink>
        <NavLink
          to="/dashboard/guias"
          id="guias"
          className={`flex w-full py-4 px-5  flex-row justify-start items-center gap-3 hover:bg-gray-700 hover:text-white ${
            location === "guias" ? "bg-gray-700 text-white" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z"
            />
          </svg>
          <p className=" leading-5 font-medium">Guias</p>
        </NavLink>
      </nav>
      <Footer />
    </section>
  );
};

export default SideBar;
