import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ContextProvider } from "./contexts/ContextProvider";
import Dashboard from "./components/Consultas/Consultas";
import Layout from "./layout/Layout";
import Consultas from "./components/Consultas/Consultas";
import Clientes from "./components/Clientes/Clientes";
import Relatorios from "./components/Relatorios/Relatorios";
import Login from "./components/Login/Login";
import Contas from "./components/Contas/Contas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "Consultas",
        element: <Consultas />,
      },
      {
        path: "Clientes",
        element: <Clientes />,
      },
      {
        path: "Relatorios",
        element: <Relatorios />,
      },
      {
        path: "Contas",
        element: <Contas />,
      }
    ],
  },
  {
    path: "Login",
    element: <Login />,
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ContextProvider>
      <Layout>
        <RouterProvider router={router} />
      </Layout>
    </ContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
