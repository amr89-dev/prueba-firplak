import { useContext, useEffect, useState } from "react";
import "./styles.css";
import { ClientsContext } from "../../contexts/clientsContex";
import { TransportadoraContext } from "../../contexts/transportadorasContext";

export const GuiaDashboard = () => {
  const { clientes } = useContext(ClientsContext);
  const { transportadoras } = useContext(TransportadoraContext);
  console.log({ transportadoras });

  const [formData, setformData] = useState({
    cliente: "",
    documentos: [],
    destino: "",
    despacho: "",
    transportadora: "",
  });

  const handleChange = (e) => {
    const { name } = e.target;
    const { value } = e.target;
    if (name === "documentos") {
      setformData({
        ...formData,
        documentos: [...formData.documentos, value],
      });
    } else {
      setformData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };
  console.log(formData);
  useEffect(() => {
    console.log("cambio el cliente");
  }, [formData.cliente]);

  return (
    <article className=" w-96 h-full p-2 flex flex-col items-center justify-center">
      <section className="sombra border-black border-2 rounded  w-full h-full p-4 bg-yellow-100">
        <h3 className="text-xl font-semibold">Generar guia:</h3>
        <form className="flex flex-col gap-4">
          <div>
            <label htmlFor="cliente">Cliente:</label>
            <input
              onChange={handleChange}
              value={formData.cliente}
              type="text"
              list="clientes"
              id="cliente"
              className="border-2 rounded border-black sombra w-[96%]"
              name="cliente"
            />
            <datalist id="clientes">
              {clientes.map((cliente) => {
                return (
                  <option key={cliente.id}>{cliente.nombreCliente}</option>
                );
              })}
            </datalist>
          </div>
          <div>
            <label htmlFor="cliente">Documento entrega:</label>
            <input
              onChange={handleChange}
              value={formData.documentos}
              type="text"
              list="docu"
              id="documento"
              className="border-2 rounded border-black sombra w-[96%]"
              name="documentos"
            />
            <datalist id="docu">
              {formData.documentos?.map((docu) => {
                return (
                  <option key={docu.id}>
                    {docu.numeroConsecutivo}
                    {}
                  </option>
                );
              })}
            </datalist>
          </div>
          <div>
            <label htmlFor="cliente">Destino:</label>
            <input
              onChange={handleChange}
              value={formData.destino}
              type="text"
              list="destino"
              id="destino"
              className="border-2 rounded border-black sombra w-[96%]"
              name="destino"
            />
          </div>
          <div>
            <label htmlFor="date">Fecha despacho:</label>
            <input
              onChange={handleChange}
              value={formData.despacho}
              type="date"
              name="despacho"
              id="date"
              min={Date.now()}
              className="border-2 rounded border-black sombra "
            />
          </div>
          <div>
            <label htmlFor="transportadora">Transportadora:</label>
            <input
              onChange={handleChange}
              value={formData.transportadora}
              type="text"
              list="trans"
              id="transportadora"
              className="border-2 rounded border-black sombra w-[96%]"
              name="transportadora"
            />
            <datalist id="trans">
              {transportadoras.map((transportadora) => {
                return (
                  <option key={transportadora.id}>
                    {transportadora.nombre}
                  </option>
                );
              })}
            </datalist>
          </div>
          <button
            type="submit"
            className="border-2 rounded border-black sombra w-[96%] h-[40px] mt-1 bg-white hover:bg-yellow-100"
          >
            Generar
          </button>
        </form>
      </section>
    </article>
  );
};
