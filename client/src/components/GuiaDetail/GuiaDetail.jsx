import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { patchGuia } from "../../services/api";
import { GuiaContext } from "../../contexts/guiaContex";

const GuiaDetail = () => {
  const params = useParams();
  const { guias } = useContext(GuiaContext);

  const guia = guias.filter((guia) => {
    return guia.id === params.id;
  })[0];

  const [estadoForm, setEstadoForm] = useState({
    isOpen: false,
    estado: guia?.estado,
  });
  const handleChange = async (e) => {
    await setEstadoForm({
      isOpen: !estadoForm.isOpen,
      estado: e.target.value,
    });
  };

  useEffect(() => {
    patchGuia(guia?.id, estadoForm);
  }, [estadoForm.estado]);
  console.log(guia);
  return (
    <section className="flex flex-row items-center justify-center  flex-wrap h-full">
      <div
        style={{ boxShadow: "4px 4px black" }}
        className="border-2 border-black rounded h-fit w-3/4 p-8 pt-10 relative"
      >
        <h4 className="text-xl font-bold mb-2">Detalles:</h4>
        <div className="text-sm">
          <p className="absolute top-4 right-6 text-xs">
            Consecutivo guia #{guia?.numeroConsecutivo}
          </p>
          <p className="absolute top-4 left-4 text-xs flex flex-row items-center">
            <span className="animate-ping2 mr-2 inline-flex h-1 w-1 rounded-full bg-yellow-400 "></span>
            {guia?.estado}
          </p>
          <p>Cliente: {guia?.Cliente.nombreCliente}</p>
          <p>Destino: {guia?.destino}</p>
          <p>
            Fecha de despacho:{" "}
            {guia?.createdAt.split("T")[0].split("-").reverse().join("-")}
          </p>
          <p>Transportadora: {guia?.Transportadora.nombre}</p>
          <div className="flex flex-row flex-wrap gap-4 ">
            Documentos asociados:
            {guia?.documento.map((el) => {
              return (
                <div
                  key={el.id}
                  className="sombra border rounded w-fit px-2 bg-white"
                >
                  Id #: {el.numeroConsecutivo}
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-row items-center justify-start">
          <button
            style={{ boxShadow: "4px 4px black" }}
            className="border-2 border-black rounded my-4 mr-2 p-1 px-2"
            onClick={() => {
              setEstadoForm({ ...estadoForm, isOpen: !estadoForm.isOpen });
            }}
          >
            Editar Estado de Guia
          </button>

          <button
            style={{ boxShadow: "4px 4px black" }}
            className="border-2 border-black rounded p-1 px-2"
          >
            Generar POD
          </button>
        </div>
        {estadoForm.isOpen && (
          <select
            style={{ boxShadow: "4px 4px black" }}
            name="estado"
            id="estado"
            className="border-2 border-black rounded text-xs"
            onChange={handleChange}
          >
            <option value="Generada">Generada</option>
            <option value="En Ruta">En Ruta</option>
            <option value="Entregado">Entregada</option>
            <option value="Novedad">Novedad</option>
          </select>
        )}
      </div>
    </section>
  );
};

export default GuiaDetail;
