// Import's
import { useState, useEffect } from "react";

// Asset's
import "./Style.css";
import navicon from "../../assets/images/menu.svg";
import tux from "../../assets/images/tux.png";

export default function Home() {
  const [sidebar, setSidebar] = useState(false);
  const [dollarPrice, setDollarPrice] = useState();
  const [euroPrice, setEuroPrice] = useState();

  function handleOpenSidebar() {
    setSidebar(!sidebar)
  }

  function dollarApi() {
    fetch("https://economia.awesomeapi.com.br/json/last/usd")
      .then(response => response.json())
      .then(data => setDollarPrice(data.USDBRL.ask))
  }

  function euroApi() {
    fetch("https://economia.awesomeapi.com.br/json/last/eur")
      .then(response => response.json())
      .then(data => setEuroPrice(data.EURBRL.ask))
  }

  useEffect(() => {
    dollarApi()
    euroApi()
  }, [])

  return (
    <div className="app">
      {/* Sidenav */}
      <aside style={sidebar ? { width: 300 } : { width: 0 }} className="sidebar">
        <div className="sidebarContent">
          <a style={sidebar ? { display: "block" } : { display: "none" }} className="sidebarItem" href="">Home</a>
          <a style={sidebar ? { display: "block" } : { display: "none" }} className="sidebarItem" href="">Cadastro</a>
          <a style={sidebar ? { display: "block" } : { display: "none" }} className="sidebarItem" href="">Financiamentos</a>
          <a style={sidebar ? { display: "block" } : { display: "none" }} className="sidebarItem" href="">Conta Corrente</a>
          <a style={sidebar ? { display: "block" } : { display: "none" }} className="sidebarItem" href="">Sobre nós</a>
        </div>
      </aside>

      {/* Home */}
      <main className="home">
        <div className="miniHeader">
          <div className="dollarArea">
            <h3>💵 Dolár hoje: R${dollarPrice}</h3>
          </div>
          <div className="bar"></div>
          <div className="euroArea">
            <h3>💶 Euro hoje: R${euroPrice}</h3>
          </div>
        </div>

        <div className="mainArea">
          <h1 className="title"><img src={"https://www.gnu.org/graphics/meditate.svg"} width={80} alt="" /> Linux Banking</h1>
          <p className="slogan">Free Bank, Free Software, Free People. | Premium Security!</p>
        </div>
      </main>
    </div>
  )
}