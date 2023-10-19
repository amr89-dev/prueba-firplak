import GuiaForm from "../GuiaForm/GuiaForm";
import GuiaTable from "../GuiaTable/GuiaTable";

const GuiaDashboard = () => {
  return (
    <div className=" grid grid-rows-2">
      <GuiaForm />
      <GuiaTable />
    </div>
  );
};

export default GuiaDashboard;
