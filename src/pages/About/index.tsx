// Asset's
import "./Style.css";
import tux from "../../assets/images/tux.png";
import gentoo from "../../assets/images/gentoo.png";

export default function About() {
  return (
    <div className="aboutPage">
      <div className="aboutContent">
        <div className="aboutTopSide">
          <h1>
            Linux Banking é um projeto opensource para um trabalho da minha
            universidade junto com meus amigos e junto com a comunidade Linux
          </h1>
          <h2>Created by Me :) & Kennedy</h2>
          <p>
            Github: <a href="https://github.com/alvarorichard">Me</a> |{" "}
            <a href="https://github.com/KennedyReisz">Kennedy</a>
          </p>
        </div>

        <div className="aboutBottomSide">
          <div className="aboutsArea">
            <img
              src={tux}
              alt=""
              width={100}
            />
            <h3>
              Linux é um termo popularmente empregado para se referir a sistemas
              operativos ou sistemas operacionais que utilizam o Kernel Linux.
            </h3>

            <img src="https://www.gnu.org/graphics/gnuhead_plain.svg" width={100} alt="" />
            <h3>
              GNU é um sistema operacional tipo Unix cujo objetivo desde sua
              concepção é oferecer um sistema operacional completo e totalmente
              composto por software livre - isto é, que respeita a liberdade dos
              usuários.
            </h3>

            <img src={gentoo} width={100} alt="" />
            <h3>
              Em informática, hacker é um indivíduo que se dedica, com
              intensidade incomum, a conhecer e modificar os aspectos mais
              internos de dispositivos, programas e redes de computadores.
              Hackers podem ser motivados por uma infinidade de razões — como
              lucro, protesto, vaidade, curiosidade, patriotismo, espírito
              competitivo, coleta de informações
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
