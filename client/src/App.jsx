import { useRoutes } from "react-router-dom";

import Home from "./pages/Home/Home.jsx";

//import ProtectedRoutes from "./utils/ProtectedRoutes.jsx";

import SignIn from "./pages/SignIn/SignIn";
import NotFound from "./pages/NotFound/NotFound";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import { GuiaDashboard } from "./components/GuiaDashboard/GuiaDashboard.jsx";

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
    <>
      <AppRouter />
    </>
  );
}

export default App;