import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { GuiaContext } from "../../contexts/guiaContex";
//eslint-disable-next-line
const GuiaList = ({ title, head }) => {
  const { guias } = useContext(GuiaContext);
  const location = useLocation().pathname;

  return (
    <div className=" w-[100%] h-[80%] border-2 border-black rounded flex flex-col p-4 sombra bg-indigo-100 ">
      <h4 className="font-bold  ">{title}</h4>
      <ul className=" overflow-y-scroll max-h-full flex flex-col gap-2 p-2">
        {head}
        {guias.map((guia) => {
          return (
            <Link
              to={
                location.includes("guia") ? `${guia?.id}` : `guias/${guia?.id}`
              }
              key={guia?.id}
              className=" bg-white p-2 text-xs flex flex-row gap-2 border-2 border-black rounded items-center justify-start sombra cursor-pointer hover:shadow hover:bg-indigo-100"
            >
              <span className=" h-1 w-1 ml-2 rounded-full m-1 bg-yellow-400 "></span>

              <span>
                {guia?.fechaDespacho
                  .split("T")[0]
                  .split("-")
                  .reverse()
                  .join("-")}
              </span>
              <span>{guia?.destino}</span>
              <span>{guia?.Cliente.nombreCliente}</span>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default GuiaList;
