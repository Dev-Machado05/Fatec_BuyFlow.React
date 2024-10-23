import "./style.css";

export default function SideBar() {
  return (
    <div className="SideBar">
      <div className="Navigation">
        <button className="HomeButton">Home</button>
        <button className="CardButton">Carrinho</button>
        <button className="AboutButton">Sobre nós</button>
      </div>

      <button className="LogoffButton">Desconectar</button>
    </div>
  );
}
