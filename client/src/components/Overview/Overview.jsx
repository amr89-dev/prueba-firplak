import { useContext } from "react";
import "./style.css";
import { GuiaContext } from "../../contexts/guiaContex";
import { DocumentoContext } from "../../contexts/documentoContext";
import GuiaList from "../GuiaList/GuiaList";
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
      <section className=" flex flex-row py-6 px-8 items-start justify-around h-3/4 gap-4 ">
        <div className=" w-[50%] h-[80%] border-2 border-black rounded flex flex-col p-4 sombra bg-amber-100">
          <h4 className="font-bold">Novedades</h4>
          <p>No hay novedades en las entregas</p>
        </div>
        <GuiaList title={"Guias Activas"} />
      </section>
    </article>
  );
};

export default Overview;
