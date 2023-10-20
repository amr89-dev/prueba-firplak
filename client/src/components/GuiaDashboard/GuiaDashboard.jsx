import GuiaForm from "../GuiaForm/GuiaForm";
import GuiaList from "../GuiaList/GuiaList";

const GuiaDashboard = () => {
  return (
    <div className=" grid grid-cols-5 grid-rows-4 gap-2 px-4 ">
      <div className=" col-span-3 row-span-2  ml-2 p-2 flex flex-col items-center justify-center ">
        <GuiaForm />
      </div>
      <div className=" col-span-2 row-span-6 ml-3 p-2 flex flex-col items-center justify-start">
        <GuiaList title={"Guias Totales"} />
      </div>
    </div>
  );
};

export default GuiaDashboard;
