// Import's
import { useState } from "react";

// Asset's
import "./Style.css";
import navicon from "../../assets/images/menu.svg";
import tux from "../../assets/images/tux.png";

export default function Signup() {
  const [sidebar, setSidebar] = useState(false);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputCpf, setInputCpf] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [showResult, setShowResult] = useState(false);

  function handleFinishSignup() {
    if (inputName && inputEmail && inputCpf && inputAddress) {
      setShowResult(true);

      setTimeout(() => {
        window.location.href = "/login"
      }, 2000)
    } else {
      alert("Preencha os campos!");
    }
  }

  return (
    <div className="all">
      <main className="signupArea">
        <div className="signupContent">
          <img
            src="https://www.gnu.org/graphics/listen-half.jpg"
            width={140}
            alt=""
          />

          <h1 style={{fontSize: 30}}>Vamos criar sua conta!</h1>

          <div className="inputsArea">
            <div className="inputName inputItem">
              <p>Nome:</p>
              <input
                type="text"
                placeholder="Digite seu nome completo"
                value={inputName}
                onChange={(e) => setInputName(e.target.value)}
              />
            </div>

            <div className="inputEmail inputItem">
              <p>Email:</p>
              <input
                type="text"
                placeholder="Digite seu email"
                value={inputEmail}
                onChange={(e) => setInputEmail(e.target.value)}
              />
            </div>

            <div className="inputCpf inputItem">
              <p>Cpf:</p>
              <input
                type="text"
                placeholder="Digite seu cpf"
                value={inputCpf}
                onChange={(e) => setInputCpf(e.target.value)}
              />
            </div>

            <div className="inputPassword inputItem">
              <p>Senha:</p>
              <input
                type="password"
                placeholder="Digite uma senha segura"
                value={inputPassword}
                onChange={(e) => setInputPassword(e.target.value)}
              />
            </div>

            <div className="inputAddress inputItem">
              <p>Endereço</p>
              <input
                type="text"
                placeholder="Digite seu endereço completo"
                value={inputAddress}
                onChange={(e) => setInputAddress(e.target.value)}
              />
            </div>

            <button onClick={handleFinishSignup} className="signupButton">
              Cadastrar
            </button>

            {showResult && (
              <div className="resultArea">
                <h3>Seu Nome: {inputName}</h3>
                <h3>Seu Email: {inputEmail}</h3>
                <h3>Seu Cpf: {inputCpf}</h3>
                <h3>Seu Endereço: {inputAddress}</h3>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
