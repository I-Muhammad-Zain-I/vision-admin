import { createBrowserRouter, Navigate } from "react-router-dom";

import Layout from "./pages/Layout";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Customers from "./pages/Customers";
import Transactions from "./pages/Transactions";
import Geography from "./pages/Geography";
import Overview from "./pages/Overview";
import Daily from "./pages/Daily";
import Monthly from "./pages/Monthly";
import Breakdown from "./pages/Breakdown";
import Admins from "./pages/Admins";
import Performance from "./pages/Performance";

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
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "daily",
        element: <Daily />,
      },
      {
        path: "monthly",
        element: <Monthly />,
      },
      {
        path: "breakdown",
        element: <Breakdown />,
      },
      {
        path: "admin",
        element: <Admins />,
      },
      {
        path: "performance",
        element: <Performance />,
      },
    ],
  },
]);

export default router;
