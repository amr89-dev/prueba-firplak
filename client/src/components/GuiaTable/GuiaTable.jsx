import { useContext } from "react";
import { GuiaContext } from "../../contexts/guiaContex";
import GuiaRow from "../GuiaRow/GuiaRow";

import "./style.css";
const GuiaTable = () => {
  const guiaContext = useContext(GuiaContext);
  const { guias } = guiaContext;

  return (
    <div className=" p-2">
      <section className="  outer-wrapper ">
        <div className="table-wrapper bg-f">
          <table className="table-auto ">
            <thead className=" ">
              <tr>
                <th></th>
                <th>#</th>
                <th>Estado:</th>
                <th>Fecha:</th>
                <th>Cliente:</th>
                <th>Destino:</th>
                <th>Transportadora:</th>
              </tr>
            </thead>
            <tbody>
              {guias
                .map((guia) => {
                  return <GuiaRow key={guia.id} data={guia} />;
                })
                .reverse()}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
};

export default GuiaTable;
