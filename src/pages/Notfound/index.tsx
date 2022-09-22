import "./Style.css";

const NotFound = () => {
  setTimeout(() => {
    window.location.href = "/"
  }, 10000)
  
  return (
    <div className="notfoundPage">
      <h1>Página não encontrada</h1>
      <img src="https://www.gnu.org/graphics/sventsitsky-sadgnu2.png" alt="" />
    </div>
  );
};

export default NotFound;
