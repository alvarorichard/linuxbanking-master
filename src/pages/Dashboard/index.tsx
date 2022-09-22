import { useState } from "react";
import "./Style.css";

const Dashboard = () => {
  const [showCredit, setShowCredit] = useState(true);
  const [userCredit, setUserCredit] = useState(1000);

  const handleHiddenCredit = () => {
    setShowCredit(!showCredit);
  }

  const handleGoToExtract = () => {
    window.location.href = "/extrato";
  }

  const handleGotoWithdrawPage = () => {
    window.location.href = "/withdraw";
  }

  const hour = new Date().getHours();
  const credit = showCredit ? userCredit : "*****";

  return (
    <div className="dashboardPage">
      <div className="dashboardContent">
        <div className="dashboardTopside">
          <div className="topSideContent">
            <img src="https://www.gnu.org/graphics/gnu-alternative.jpg" style={{marginTop: 10}} width={100} alt="" />
            <h1>{hour <= 11 ? "Bom dia" : hour >= 12 ? "Boa tarde" : hour >= 17 ? "Boa Noite" : hour >= 0 ? "Boa Noite" : hour >= 4 ? "Bom dia" : null} uTorrent</h1>
            <h2>Seu saldo atual é de:</h2>
            <h1>R${credit}</h1>
            
            <button className="showCreditButton" onClick={handleHiddenCredit}>{showCredit ? "Esconder Saldo" : "Mostrar Saldo"}</button>
            <button onClick={handleGotoWithdrawPage} className="withdrawButton">Saques & Depositos</button>
          </div>
        </div>
        <div className="dashboardBottomside">
          <div onClick={handleGoToExtract} className="extract">
            <h3>Extrato</h3>
          </div>

          <div onClick={() => {window.location.href = "/finances"}} className="finance">
            <h3>Financiamentos</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
