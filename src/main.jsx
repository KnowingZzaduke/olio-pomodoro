import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import DashboardOlio from "./routes/dashboard.jsx";
import { NextUIProvider } from "@nextui-org/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TableData from "./components/Table.jsx";
import FormSendData from "./components/FormSendData.jsx";
import Welcome from "./components/Welcome.jsx";
import HOC from "./validation/Hoc.jsx";
import FormAddProducts from "./components/FormAddProducts.jsx";
import DataContextProvider from "./context/DataContext.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <HOC>
        <App />
      </HOC>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <HOC>
        <DashboardOlio />
      </HOC>
    ),
    children: [
      {
        path: "/dashboard/bienvenida",
        element: <Welcome />,
      },
      {
        path: "/dashboard/formulario-enviar-facturas",
        element: <FormSendData />,
      },
      {
        path: "/dashboard/formulario-agregar-productos",
        element: (
            <FormAddProducts />
        ),
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
    <DataContextProvider>
      <NextUIProvider>
        <RouterProvider router={router} />
      </NextUIProvider>
    </DataContextProvider>
  </React.StrictMode>
);
