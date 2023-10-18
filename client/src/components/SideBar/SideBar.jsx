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
        <NavLink
          to="/dashboard/transportadoras"
          id="transportadoras"
          className={`flex w-full py-4 px-5  flex-row justify-start items-center gap-2 hover:bg-gray-700 hover:text-white ${
            location === "transportadoras" ? "bg-gray-700 text-white" : ""
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
              d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
            />
          </svg>

          <p className=" leading-5 font-medium">Transportadoras</p>
        </NavLink>
      </nav>
      <Footer />
    </section>
  );
};

export default SideBar;
