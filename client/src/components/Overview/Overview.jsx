import { useContext } from "react";
import "./style.css";
import { GuiaContext } from "../../contexts/guiaContex";
import { Link } from "react-router-dom";
import { DocumentoContext } from "../../contexts/documentoContext";
const Overview = () => {
  const { guias } = useContext(GuiaContext);
  const { documentos } = useContext(DocumentoContext);
  const guiasEnRuta = guias.filter((guia) => {
    return guia.estado === "En Ruta";
  });
  const guiasCompletadas = guias.filter((guia) => {
    return guia.estado === "Entregado";
  });

  return (
    <article className="h-screen flex flex-col">
      <section className=" flex flex-row py-6 px-8 items-center justify-between">
        <div className="  h-auto border-2 border-black rounded flex flex-col p-4 bg-sky-200 sombra">
          <h4 className="font-semibold text-sm ">Documentos de Entrega</h4>
          <p className="font-bold text-2xl">{documentos?.length}</p>
        </div>
        <div className="  h-auto border-2 border-black rounded flex flex-col p-4 bg-red-200 sombra">
          <h4 className="font-semibold text-sm">Guias Generadas</h4>
          <p className="font-bold text-2xl">{guias.length}</p>
        </div>
        <div className="  h-auto border-2 border-black rounded flex flex-col p-4 bg-yellow-200 sombra">
          <h4 className="font-semibold text-sm">Guias en Ruta</h4>
          <p className="font-bold text-2xl">{guiasEnRuta.length}</p>
        </div>
        <div className="  h-auto border-2 border-black rounded flex flex-col p-4 bg-green-200 sombra">
          <h4 className="font-semibold text-sm">Guias Completadas</h4>
          <p className="font-bold text-2xl">{guiasCompletadas.length}</p>
        </div>
      </section>
      <section className=" flex flex-row py-6 px-8 items-start justify-around h-3/4 ">
        <div className=" w-80 h-[80%] border-2 border-black rounded flex flex-col p-4 sombra bg-amber-100">
          <h4 className="font-bold">Novedades</h4>
          <p>No hay novedades en las entregas</p>
        </div>
        <div className=" w-[60%] h-[80%] border-2 border-black rounded flex flex-col p-4 sombra bg-indigo-100 ">
          <h4 className="font-bold  ">Ultimas Guias Generadas</h4>
          <ul className=" overflow-y-scroll max-h-full flex flex-col gap-2 p-2">
            {guias.map((guia) => {
              return (
                <Link
                  to={`guias/${guia?.id}`}
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
      </section>
    </article>
  );
};

export default Overview;
