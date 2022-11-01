import React, { useState } from "react";
import { useStateContext } from "./contexts/ContextProvider";
import "./App.css";
import Login from "./components/Login";
import Layout from "./layout/Layout";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Sidebar from "./layout/Sidebar/Sidebar";
import Header from "./layout/Header/Header";

//Extremamente básico por enquanto, precisa adicionar
//estilização, separar as funções por página, convenção, etc..

function App() {
  //TODO mover isso para TelaLogin

  const [user, setUser] = useState<string | null>(null);

  const handleSubmit = (e: SubmitEvent, userInput: string, passwordInput: string) => {
    e.preventDefault();
    for (const login of USERS) {
      const { user, password } = login;
      if (user === userInput && password === passwordInput) {
        setUser(userInput);
        return;
      }
    }
    return alert("Usuário ou senha inválidos!");
  };
  const handleLogout = () => {
    setUser(null);
  };

  const USERS = [{ user: "teste", password: "foi?" },
    { user: "outro", password: "!!" }];

  return (
    <>
      <Header />
      <div className="wrapper">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
}

export default App;
