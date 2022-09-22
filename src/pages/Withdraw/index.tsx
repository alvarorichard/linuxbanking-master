// Import's
import { useState } from "react";

// Asset's
import "./Style.css";

const Withdraw = () => {
  const [isWithDraw, setIsWithDraw] = useState(2);
  const [withdrawInput, setWithdrawInput] = useState("");
  const [depositInput, setDepositInput] = useState("");

  const handleFinishWithdraw = () => {
    if(depositInput || withdrawInput !== "0") {
      

      setTimeout(() => {
        window.location.href = "/successtransaction";
      }, 1000)
    } else {
      alert("Preencha o campo");
    }
  }

  return (
    <div className="withdrawPage">
      <div className="withdrawItems">
        <div className="withdrawTopside">
          <div className="switchButtonsArea">
            <img src={"https://www.gnu.org/graphics/gnu-alternative.svg"} width={150} alt="" />
            <p>Deseja sacar ou depósitar?</p>

            <div className="switchButtons">
              <button onClick={() => { setIsWithDraw(0) }}>Sacar</button>
              <button onClick={() => { setIsWithDraw(1) }}>Depósitar</button>
            </div>
          </div>
        </div>
        <div className="withdrawBottomside">
          {isWithDraw === 0 ? (
            <div className="withdrawInputs">
              <div>
                <h3 className="withDrawArea">Sacar:</h3>
                <input value={withdrawInput} onChange={(e) => {setWithdrawInput(e.target.value)}} type="number" placeholder="R$100" />
              </div>
              <div className="finishArea">
                <button onClick={handleFinishWithdraw}>Finalizar Operação</button>
              </div>
            </div>
          ) : isWithDraw === 1 ? (
            <div className="withdrawInputs">
              <div className="depositArea">
                <h3>Depósitar:</h3>
                <input value={depositInput} onChange={(e) => {setDepositInput(e.target.value)}} type="number" placeholder="R$100" />
              </div>
              <div className="finishArea">
                <button onClick={handleFinishWithdraw}>Finalizar Operação</button>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Withdraw;
