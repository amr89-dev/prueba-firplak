import { useContext, useEffect, useState } from "react";
import "./styles.css";
import { ClientsContext } from "../../contexts/clientsContex";
import { TransportadoraContext } from "../../contexts/transportadorasContext";
import { getClientInfo } from "../../services/api";
import { GuiaContext } from "../../contexts/guiaContex";
const GuiaForm = () => {
  const { generateGuia } = useContext(GuiaContext);
  const { clientes } = useContext(ClientsContext);
  const { transportadoras } = useContext(TransportadoraContext);
  const [clienteInfo, setClienteInfo] = useState({});
  const [clienteToSearch, setClienteToSearch] = useState("");
  const [transToSearch, setTransToSearch] = useState("");
  const { DocumentoEntregas: documentosEntrega } = clienteInfo;
  const [formData, setformData] = useState({
    clienteId: "",
    transportadoraId: "",
    fechaDespacho: new Date()
      .toLocaleDateString()
      .split("/")
      .reverse()
      .join("-"),
    destino: "",
    documentoEntregaId: [],
  });
  useEffect(() => {
    clienteToSearch.length > 0 && getInfo();
  }, [clienteToSearch]);

  const destinoDocs = Array.from(
    new Set(documentosEntrega?.map((el) => el.destino))
  );

  const docToRender = formData.documentoEntregaId.map((docId) => {
    const docu = documentosEntrega.find((el) => {
      return el.id === docId;
    });
    return docu;
  });
  const docuFiltered = formData.destino
    ? documentosEntrega.filter((el) => el.destino === formData.destino)
    : [];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "cliente") {
      setClienteToSearch(value);
    } else if (name === "transportadora") {
      setTransToSearch(value);
      const trans = transportadoras.find((el) => el.nombre === value);
      setformData({
        ...formData,
        transportadoraId: trans?.id,
      });
    } else if (name === "documentos") {
      const newDocId = formData.documentoEntregaId.includes(value);

      if (!newDocId) {
        setformData({
          ...formData,
          documentoEntregaId: [...formData.documentoEntregaId, value],
        });
      }
    } else {
      setformData({
        ...formData,
        [name]: value,
      });
    }
  };

  const getInfo = async () => {
    const clienteId = clientes.find(
      (cliente) => cliente.nombreCliente === clienteToSearch
    );

    const infoCliente = await getClientInfo(clienteId?.id);
    setClienteInfo(infoCliente);
    setformData({
      ...formData,
      clienteId: infoCliente.id,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    generateGuia(formData);
  };
  return (
    <article className=" w-full  p-2 flex flex-col items-center justify-center">
      <section className="sombra border-black border-2 rounded  w-full h-full p-4 bg-yellow-100 ">
        <h3 className="text-xl font-semibold mb-2">Generar guia:</h3>
        <form
          onSubmit={handleSubmit}
          className="flex flex-row flex-wrap text-sm"
        >
          <div className="flex flex-col gap-1 mr-2 mb-2">
            <label className="mt-1 text-base" htmlFor="cliente ">
              Cliente:
            </label>
            <input
              onChange={handleChange}
              value={clienteToSearch}
              type="text"
              list="clientes"
              id="cliente"
              className="border-2 rounded border-black sombra placeholder:text-xs"
              name="cliente"
              placeholder="Busca un cliente"
            />
            <datalist id="clientes">
              {clientes.map((cliente) => {
                return (
                  <option key={cliente.id}>{cliente.nombreCliente}</option>
                );
              })}
            </datalist>
          </div>
          <div className="flex flex-col gap-1 mr-2 mb-2">
            <label className="mt-1 text-base" htmlFor="cliente">
              Destino:
            </label>
            <input
              onChange={handleChange}
              value={formData.destino}
              type="text"
              list="desti"
              id="destino"
              className="border-2 rounded border-black sombra placeholder:text-xs"
              name="destino"
              placeholder="Busca una sucursal"
            />
            <datalist id="desti">
              {destinoDocs.map((destino) => {
                return <option key={destino}>{destino}</option>;
              })}
            </datalist>
          </div>
          <div className="flex flex-col gap-1 mr-2 mb-2">
            <label className="mt-1 text-base" htmlFor="transportadora">
              Transportadora:
            </label>
            <input
              onChange={handleChange}
              value={transToSearch}
              type="text"
              list="trans"
              id="transportadora"
              className="border-2 rounded border-black sombra placeholder:text-xs"
              name="transportadora"
              placeholder="Elige una transportadora"
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
          <div className="flex flex-col gap-1 mr-2 mb-2">
            <label className="mt-1 text-base" htmlFor="date">
              Fecha despacho:
            </label>
            <input
              onChange={handleChange}
              value={formData.fechaDespacho}
              type="date"
              name="fechaDespacho"
              id="date"
              className="border-2 rounded border-black sombra "
            />
          </div>
          <div className="flex flex-col gap-1 mr-2 mb-2">
            <label className="mt-1 text-base" htmlFor="cliente">
              Documentos de entrega:
            </label>
            <input
              onChange={handleChange}
              onSelect={(e) => {
                e.target.value = "";
              }}
              value={formData.documentos}
              type="text"
              list="docu"
              id="documento"
              className="border-2 rounded border-black sombra placeholder:text-xs "
              name="documentos"
              placeholder="Añade documentos"
            />
            <datalist id="docu">
              {docuFiltered?.map((docu) => {
                return (
                  <option key={docu.id} value={docu.id}>
                    {docu?.numeroConsecutivo} - {docu.productos}
                  </option>
                );
              })}
            </datalist>
          </div>

          <div className="flex flex-col justify-end items-center mr-2 mb-2">
            <button
              type="submit"
              className="border-2 rounded border-black sombra text-base font-bold  p-2 mt-1 bg-white hover:bg-yellow-100"
            >
              Generar
            </button>
          </div>
        </form>
        {
          <div className="flex flex-row flex-wrap gap-2 mt-2">
            {docToRender.map((el) => {
              return (
                <div
                  key={el.id}
                  className="sombra border rounded w-fit px-2 bg-white"
                >
                  Id #: {el?.numeroConsecutivo}
                </div>
              );
            })}
          </div>
        }
      </section>
    </article>
  );
};

export default GuiaForm;
