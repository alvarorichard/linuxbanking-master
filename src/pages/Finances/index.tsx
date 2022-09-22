// Import's
import { useState } from "react";

// Asset's
import "./Style.css";

const Finances = () => {
  const [financeInput, setFinanceInput] = useState("");
  const pct = 5;

  const handleCalculate = () => {
    const converted = parseFloat(financeInput);

    const result = (pct / 100) * converted;

    alert(`Total em juros: R$${result}`)
  }

  return (
    <div className="financesPage">
      <div className="financesItem">
        <div className="financesTopside">
          <img src={"https://www.gnu.org/graphics/gnu-alternative.svg"} width={150} alt="" />
          <h3>Simulação de Financiamento</h3>

          <div className="financeArea">
            <p>Valor:</p>
            <input value={financeInput} onChange={(e) => {setFinanceInput(e.target.value)}} type="number" placeholder="R$100" />
          </div>

          <button onClick={handleCalculate}>Calcular Financiamento</button>
        </div>
        <div className="financesside"></div>
      </div>
    </div>
  );
};

export default Finances;
