import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DashboardOlio from "./routes/dashboard.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TableData from "./components/Table.jsx";
import FormSendData from "./components/FormSendData.jsx";
import Welcome from "./components/Welcome.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <DashboardOlio />,
    children: [
      {
        path: "/dashboard/bienvenida",
        element: <Welcome/>
      },
      {
        path: "/dashboard/formulario",
        element: <FormSendData />,
      },
      {
        path: "/dashboard/tabla",
        element: <TableData />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <NextUIProvider>
      <RouterProvider router={router} />
    </NextUIProvider>
  </React.StrictMode>
);
