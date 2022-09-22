// Import's
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

// Asset's
import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import About from "./pages/About";
import tux from "./assets/images/tux.png";
import navicon from "./assets/images/menu.svg";
import Signin from "./pages/Signin";
import NotFound from "./pages/Notfound";
import Dashboard from "./pages/Dashboard";
import Extract from "./pages/Extract";
import Withdraw from "./pages/Withdraw";
import Finances from "./pages/Finances";
import SuccessTransaction from "./pages/SuccessTransaction";

export default function App() {
  const [sidebar, setSidebar] = useState(false);

  function handleOpenSidebar() {
    setSidebar(!sidebar);
  }

  return (
    <div className="app">
      {/* Header */}
      <header className="headerContainer">
        <div className="leftSide">
          <img src={tux} width={50} alt="" />
          <h1 className="headerTitle">Linux Banking</h1>
        </div>

        <nav className="navbar">
          <a className="navItem" href="/">Home</a>
          <a className="navItem" href="/signin">Login</a>
          <a className="navItem" href="/signup">Cadastro</a>
          <a className="navItem" href="/about">Sobre nós</a>
          <img
            onClick={handleOpenSidebar}
            className="navIcon"
            src={navicon}
            alt=""
          />
        </nav>
      </header>

      {/* Sidenav */}
      <aside style={sidebar ? { width: 300 } : { width: 0 }} className="sidebar">
        <div className="sidebarContent">
          <a style={sidebar ? { display: "block" } : { display: "none" }} className="sidebarItem" href="/">
            Home
          </a>
          <a style={sidebar ? { display: "block" } : { display: "none" }} className="sidebarItem" href="/signup">
            Cadastro
          </a>
          <a style={sidebar ? { display: "block" } : { display: "none" }} className="sidebarItem" href="/signin">
            Login
          </a>
          <a style={sidebar ? { display: "block" } : { display: "none" }} className="sidebarItem" href="/about">
            Sobre nós
          </a>
        </div>
      </aside>

      <Routes>
      <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/cadastro" element={<Signup />}></Route>
        <Route path="/cadastrar" element={<Signup />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/aboutus" element={<About />}></Route>
        <Route path="/sobre" element={<About />}></Route>
        <Route path="/sobrenos" element={<About />}></Route>
        <Route path="/signin" element={<Signin />}></Route>
        <Route path="/login" element={<Signin />}></Route>
        <Route path="/logar" element={<Signin />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="/extract" element={<Extract />}></Route>
        <Route path="/extrato" element={<Extract />}></Route>
        <Route path="/withdraw" element={<Withdraw />}></Route>
        <Route path="/finances" element={<Finances />}></Route>
        <Route path="/successtransaction" element={<SuccessTransaction />}></Route>
      </Routes>

      <footer className="footerContainer">
        <div className="footerContent">
          <div className="linksArea">
            <ul className="link1">
              <li>Ferramentas Usadas:</li>
              <li><a href="https://code.visualstudio.com/">Visual Studio Code</a></li>
              <li><a href="https://github.com/facebook/react">ReactJS</a></li>
              <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
            </ul>
            <ul>
              <li>Fontes:</li>
              <li><a href="https://wiki.gentoo.org/wiki/Main_Page">Gentoo</a></li>
              <li><a href="https://www.gnu.org/gnu/linux-and-gnu.pt-br.html">GNU</a></li>
              <li><a href="https://pt.wikipedia.org/wiki/Wikip%C3%A9dia:P%C3%A1gina_principal">Wikipedia</a></li>
            </ul>
          </div>

          <img id="znurt" src="https://wiki.gentoo.org/images/4/4c/Znurt.svg" alt="" />
        </div>
      </footer>
    </div>
  );
}
