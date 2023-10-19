import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { GuiaContext } from "../../contexts/guiaContex";
import "./style.css";

const GuiaDetail = () => {
  const params = useParams();
  const { guias, updateGuia } = useContext(GuiaContext);
  const guia = guias.filter((guia) => {
    return guia.id === params.id;
  })[0];

  const [inputIsOpen, setInputIsOpen] = useState(false);
  const initialState = {
    estado: guia?.estado,
  };
  const [guiaStatus, setGuiaStatus] = useState(initialState);

  const rangeValues = {
    Generada: 0,
    "En Ruta": 33,
    Novedad: 66,
    Entregado: 99,
  };
  const stepValue = rangeValues[guia?.estado];
  const toggleInput = () => {
    setInputIsOpen(!inputIsOpen);
  };

  const handleChange = (e) => {
    const { value } = e.target;

    setGuiaStatus({ ...guiaStatus, estado: value });
  };

  const handleSubmit = () => {
    updateGuia(guia.id, guiaStatus);
    toggleInput();
    setGuiaStatus(initialState);
  };
  console.log();
  return (
    <section>
      <div className="flex flex-row items-center justify-center mt-10">
        <input
          type="range"
          min={0}
          max={99}
          step={33}
          className=" w-3/4 appearance-none border-transparent bg-neutral-200 rounded range h-2 "
          list="tickmarks"
          defaultValue={stepValue}
        />
        <datalist id="tickmarks">
          <option value="0"></option>
          <option value="33"></option>
          <option value="66"></option>
          <option value="99"></option>
        </datalist>
      </div>
      <aside className="flex flex-row items-start mt-10 justify-center  flex-wrap h-full ">
        <div className="border-2 border-black shadow-sombra rounded h-fit w-3/4 p-4 relative bg-cyan-100">
          <h4 className="text-xl font-bold mb-2">Detalles:</h4>
          <div className="text-sm">
            <p className="absolute top-4 right-6 text-xs pt-2">
              GD-00{guia?.numeroConsecutivo}
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
                    className="sombra  rounded w-fit px-2 bg-white border-2 border-black"
                  >
                    Id #: {el.numeroConsecutivo}
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex flex-row items-center justify-start">
            <button
              className={`border-2 border-black  rounded my-4 d mr-2 p-1 px-2 bg-white ${
                inputIsOpen ? "shadow" : "shadow-sombra"
              }`}
              onClick={toggleInput}
            >
              Editar Estado de Guia
            </button>

            <button className="border-2 border-black shadow-sombra rounded p-1 px-2 bg-white">
              Generar POD
            </button>
          </div>
          {inputIsOpen && (
            <div className="flex flex-row items-center gap-4">
              <select
                name="estado"
                id="estado"
                className="border-2 border-black rounded text-xs shadow-sombra"
                onChange={handleChange}
              >
                <option value="">---</option>
                <option value="Generada">Generada</option>
                <option value="En Ruta">En Ruta</option>
                <option value="Entregado">Entregada</option>
                <option value="Novedad">Novedad</option>
              </select>
              <button
                type="submit"
                className="sombra border-2 border-black rounded text-xs h-9 bg-white p-1 px-2"
                onClick={handleSubmit}
              >
                Actualizar
              </button>
            </div>
          )}
        </div>
      </aside>
    </section>
  );
};

export default GuiaDetail;
