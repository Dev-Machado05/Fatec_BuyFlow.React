import "./style.css";

export default function SideBar({ Commercial }) {
    
    const urlAtual = window.location.href;
    const page = urlAtual.split("/")[3]; 
    
    function SwitchPage(pg) {
        switch (pg) {
            case 1:
                window.location.href = "/";
                break;
            case 2:
                if (Commercial === false) {
                    window.location.href = "/Home";
                } else {
                    window.location.href = "/AdmHome";
                }
                break;
            case 3:
                window.location.href = "/Carrinho";
                break;
            case 4:
                window.location.href = "/About";
                break;
            case 5:
                window.location.href = "/AdmHome/NwProduct";
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
        {
            page === "AdmHome" ?  
            <button onClick={() => SwitchPage(5)}>Criar Produto</button> :
            null
        }
      </div>

      <button className="LogoffButton" onClick={() => SwitchPage(1)}>Desconectar</button>
    </div>
  );
}
