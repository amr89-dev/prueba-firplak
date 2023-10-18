import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../../components/NavBar/NavBar";
import SideBar from "../../components/SideBar/SideBar";
import Overview from "../../components/Overview/Overview";

const Dashboard = () => {
  const location = useLocation().pathname;

  return (
    <div className="flex ">
      <SideBar />
      <div className="flex flex-col w-full ">
        <NavBar />
        {location.length > 11 ? <Outlet /> : <Overview />}
      </div>
    </div>
  );
};

export default Dashboard;
