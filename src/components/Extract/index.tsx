import "./Style.css";
import downloadIcon from "../../assets/images/download.svg";

interface Props {
  id: string;
  nomeDaFatura: string;
  dataDeAbertura: string;
  dataDeFinalizamento: string;
  quantiaPaga: string;
  quantiaRestante: string;
  download: string;
}

const ExtractItem = ({
  id,
  nomeDaFatura,
  dataDeAbertura,
  dataDeFinalizamento,
  quantiaPaga,
  quantiaRestante,
  download,
}: Props) => {
  return (
    <div className="extractItem">
        <p id="item1">{id}</p>
        <p id="item2">{nomeDaFatura}</p>
        <p id="item3">{dataDeAbertura}</p>
        <p id="item4">{dataDeFinalizamento}</p>
        <p id="item5">R${quantiaPaga}</p>
        <p id="item6">R${quantiaRestante}</p>
        <p id="item7">
          <img width={20} src={downloadIcon} alt="" />
          <a download={"fatura"} href={download}>
            Baixar Pdf
          </a>
        </p>
    </div>
  );
};

export default ExtractItem;
