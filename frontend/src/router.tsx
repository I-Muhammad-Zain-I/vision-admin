import { createBrowserRouter, Navigate } from "react-router-dom";

import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Transactions from "./pages/Transactions";
import Geography from "./pages/Geography";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Navigate to="/dashboard" replace />, // if we were to go to / it will go to /dashboard
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "customers",
        element: <Customers />,
      },
      {
        path: "transactions",
        element: <Transactions />,
      },
      {
        path: "geography",
        element: <Geography />,
      },
    ],
  },
]);

export default router;
