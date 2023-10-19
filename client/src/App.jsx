import { useRoutes } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";

//import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";

import SignIn from "./pages/SignIn/SignIn";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import GuiaDashboard from "./components/GuiaDashboard/GuiaDashboard.jsx";
import TransportadoraDashboard from "./components/TransportadoraDashboard/TransportadoraDashboard.jsx";
import GuiaDetail from "./components/GuiaDetail/GuiaDetail.jsx";

function App() {
  const AppRouter = () => {
    const routes = useRoutes([
      /*  {
        path: "/",
        element: <ProtectedRoutes />,
        children: [],
      }, */
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard/guias",
            element: <GuiaDashboard />,
          },
          {
            path: "/dashboard/guias/:id",
            element: <GuiaDetail />,
          },
          {
            path: "/dashboard/transportadoras",
            element: <TransportadoraDashboard />,
          },
          {
            path: "*",
            element: <NotFound />,
          },
        ],
      },
      {
        path: "/login",
        element: <SignIn />,
      },

      {
        path: "*",
        element: <NotFound />,
      },
    ]);
    return routes;
  };
  return (
    <div className="font-lexen max-h-screen overflow-hidden">
      <AppRouter />
    </div>
  );
}

export default App;
