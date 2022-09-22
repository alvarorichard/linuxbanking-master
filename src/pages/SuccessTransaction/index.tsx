import "./Style.css";

const SuccessTransaction = () => {
  setTimeout(() => {
    window.location.href = "/dashboard";
  }, 3000);

  return (
    <div className="successPage">
      <h1>Transação feita com Sucesso!</h1>
      <img width={300} src="https://www.gnu.org/graphics/fsfsociety/party-thumb.png" alt="" />
    </div>
  );
};

export default SuccessTransaction;
