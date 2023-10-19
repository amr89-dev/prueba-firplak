/*eslint-disable */

import { Link } from "react-router-dom";

const GuiaRow = ({ data }) => {
  return (
    <tr className=" hover:bg-fuchsia-200 rounded">
      <td>
        <Link to={`${data?.id}`}>{data?.estado}</Link>
      </td>
      <td>
        {data?.fechaDespacho.split("T")[0].split("-").reverse().join("-")}
      </td>
      <td>{data?.Cliente.nombreCliente}</td>
      <td>{data?.destino}</td>
      <td>{data?.Transportadora.nombre}</td>
      <td>GD-00{data?.numeroConsecutivo}</td>
    </tr>
  );
};

export default GuiaRow;
