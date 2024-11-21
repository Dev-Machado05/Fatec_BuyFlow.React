import "./style.css";
import TempImage from "../../assets/image/ImagemEx (1).png";

export default function Carroussel({ Items }) {
  
  const urlAtual = window.location.href;
  const page = urlAtual.split("/")[3]; 
  console.log(Items.length);
  
  return (
    <div className="carroussel">
  {
    page === "Home" ? 
    Array.from({ length: Items.length }).map((_, i) => (
      <a href={`/Home/Product/${i}`} key={i}>
        <div className="carrousselItem">
          <img src={ Items[i].Imagem } alt={`Produto ${i}`} />
          <h2>{ Items[i].Nome }</h2>
          <p>{ Items[i].Preco }</p>
        </div>
      </a>
    )) :
    Array.from({ length: Items.length }).map((_, i) => (
      <a href={`/AdmHome/Product/${i}`} key={i}>
        <div className="carrousselItem">
          <img src={ Items[i].Imagem } alt={`Produto ${i}`} />
          <h2>{ Items[i].Nome }</h2>
          <p>{ Items[i].Preco }</p>
        </div>
      </a>
    ))
  }
</div>
  );
}
