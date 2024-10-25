import "./style.css";

export default function SideBar() {
    
    function SwitchPage(pg) {
        switch (pg) {
            case 1:
                window.location.href = "/";
                break;
            case 2:
                window.location.href = "/Home";
                break;
            case 3:
                window.location.href = "/Carrinho";
                break;
            case 4:
                window.location.href = "/About";
                break;
            default:
                break;
        }
    }

    return (
    <div className="SideBar">
      <div className="Navigation">
        <button onClick={() => SwitchPage(2)}>Home</button>
        <button onClick={() => SwitchPage(3)}>Carrinho</button>
        <button onClick={() => SwitchPage(4)}>Sobre nós</button>
      </div>

      <button className="LogoffButton" onClick={() => SwitchPage(1)}>Desconectar</button>
    </div>
  );
}
