import { Outlet, createBrowserRouter } from "react-router-dom";
import App from "../App";
import DashboardLayout from "../components/Layout/DashboardLayout";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import UserDetails from "../pages/Home/UserDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: "404 error found!",
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/user/:id",
        element: <UserDetails />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <DashboardLayout>
        <Outlet />
      </DashboardLayout>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
    ],
  },
]);

export default  router