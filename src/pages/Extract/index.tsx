// Asset's
import "./Style.css";
import ExtractItem from "../../components/Extract";

const Extract = () => {
  return (
    <div className="extractPage">
      <div className="algumaLogo">
        <img
          src="https://www.gnu.org/graphics/gnu-alternative.jpg"
          width={200}
          alt=""
        />
      </div>
      <div className="extractsContainer">
        <header className="extractTitles">
          <p id="item1">id</p>
          <p id="item2">Nome da fatura</p>
          <p id="item3">Data de abertura</p>
          <p id="item4">Data de finalização</p>
          <p id="item5">Quantia paga</p>
          <p id="item6">Quantia Restante</p>
          <p id="item7">Download</p>
        </header>

        <div style={{ width: "100%" }} className="bar"></div>

        <div className="extractsContent">
          <ExtractItem
            id="1"
            nomeDaFatura="Pagar o carro"
            dataDeAbertura="18-05-2018"
            dataDeFinalizamento="18-05-2020"
            quantiaPaga="32.960"
            quantiaRestante="1.233"
            download=""
          />
          <div className="bar"></div>
          <ExtractItem
            id="2"
            nomeDaFatura="Pagar o carro"
            dataDeAbertura="18-05-2018"
            dataDeFinalizamento="18-05-2020"
            quantiaPaga="32.960"
            quantiaRestante="1.233"
            download=""
          />
          <div className="bar"></div>
          <ExtractItem
            id="3"
            nomeDaFatura="Pagar o carro"
            dataDeAbertura="18-05-2018"
            dataDeFinalizamento="18-05-2020"
            quantiaPaga="32.960"
            quantiaRestante="1.233"
            download=""
          />
          <div className="bar"></div>
          <ExtractItem
            id="4"
            nomeDaFatura="Pagar o carro"
            dataDeAbertura="18-05-2018"
            dataDeFinalizamento="18-05-2020"
            quantiaPaga="32.960"
            quantiaRestante="1.233"
            download=""
          />
          <div className="bar"></div>
          <ExtractItem
            id="5"
            nomeDaFatura="Comprei sua mae"
            dataDeAbertura="18-05-1820"
            dataDeFinalizamento="18-05-2080"
            quantiaPaga="39032454"
            quantiaRestante="4089329058"
            download=""
          />
        </div>
      </div>
    </div>
  );
};

export default Extract;
