import { useState } from "react";
import "./Style.css";

const CurrentyAccount = () => {
  const [loginEmailInput, setLoginEmailInput] = useState("");
  const [loginPasswordInput, setLoginPasswordInput] = useState("");

  const handleMakeLogin = () => {
    if (loginEmailInput && loginPasswordInput) {
      window.location.href = "/dashboard"
    } else {
      alert("Preencha os campos");
    }
  };

  return (
    <div className="signinPage">
      <div className="signinContent">
        <div className="signTopside">
          <img
            src="https://www.gnu.org/graphics/gnuhead_plain.svg"
            width={200}
            alt=""
          />
          <h1>Esta na hora de entrar!</h1>
        </div>
        <div className="signBottomside">
          <div className="signInputs">
            <input
              type="text"
              placeholder="Email ou Cpf..."
              value={loginEmailInput}
              onChange={(e) => setLoginEmailInput(e.target.value)}
            />
            <input
              type="password"
              placeholder="Digite sua senha"
              value={loginPasswordInput}
              onChange={(e) => setLoginPasswordInput(e.target.value)}
            />
          </div>
          <a onClick={handleMakeLogin} className="signinButton">
            Logar
          </a>
        </div>
      </div>
    </div>
  );
};

export default CurrentyAccount;
