import React, { useState } from "react";
import { useStateContext } from "./contexts/ContextProvider";
import "./App.css";
import Login from "./components/Login/Login";
import Layout from "./layout/Layout";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Sidebar from "./layout/Sidebar/Sidebar";
import Header from "./layout/Header/Header";

function App() {
  const [sidebarOpen, setSideBarOpen] = useState(false);
  const handleViewSidebar = () => {
    setSideBarOpen(!sidebarOpen);
  };

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
      <Header isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
      <div className="wrapper">
        <Sidebar isOpen={sidebarOpen} toggleSidebar={handleViewSidebar} />
        <Outlet />
      </div>
    </>
  );
}

export default App;
