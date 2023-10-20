/*eslint-disable */

import { Link } from "react-router-dom";

const GuiaRow = ({ data }) => {
  return (
    <tr className=" hover:bg-fuchsia-200 rounded">
      <td>
        <input type="checkbox" name="" id="" />
      </td>
      <td>GD-{`${data?.numeroConsecutivo}`.padStart(4, "0000")}</td>
      <td>
        <Link to={`${data?.id}`}>{data?.estado}</Link>
      </td>
      <td>
        {data?.fechaDespacho.split("T")[0].split("-").reverse().join("-")}
      </td>
      <td>{data?.Cliente.nombreCliente}</td>
      <td>{data?.destino}</td>
      <td>{data?.Transportadora.nombre}</td>
    </tr>
  );
};

export default GuiaRow;
