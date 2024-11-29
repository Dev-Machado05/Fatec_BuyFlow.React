import "./style.css";
import { useState, useEffect } from "react";
import TempImage from "../../assets/image/ImagemEx (1).png";

export default function Carroussel({ Items }) {
  
  const [NwPreco, setNwPreco] = useState([]); 

  useEffect(() => {
    const novosPrecos = Items.map(item => {
      return item.Desconto
        ? item.Preco - (item.Preco * (item.Val_Desconto / 100)) 
        : item.Preco;
    });
    setNwPreco(novosPrecos); 
  }, [Items]); 

  const urlAtual = window.location.href;
  const page = urlAtual.split("/")[3]; 
  const maxItems = 20;
  
  const itemsToDisplay = Items.slice(0, maxItems);

  return (
    <div className="carroussel">
      {
        page === "Home" ? 
        itemsToDisplay.map((item, i) => (
          <a href={`/Home/Product/${i}`} key={i}>
            <div className="carrousselItem">
              <img src={item.Imagem} alt={`Produto ${i}`} />
              <h2>{item.Nome}</h2>
              {
              item.Desconto 
                ? <p><span>De:</span> {item.Preco},00<br /><span>Por:</span> {NwPreco[i]},00</p> 
                : <p><span>R$: </span>{item.Preco},00</p>
            }
            </div>
          </a>
        )) :
        itemsToDisplay.map((item, i) => (
          <a href={`/AdmHome/Product/${i}`} key={i}>
            <div className="carrousselItem">
              <img src={item.Imagem} alt={`Produto ${i}`} />
              <h2>{item.Nome}</h2>
              {
              item.Desconto 
                ? <p><span>De:</span> {item.Preco},00<br /><span>Por:</span> {NwPreco[i]},00</p> 
                : <p><span>R$: </span>{item.Preco},00</p>
            }
            </div>
          </a>
        ))
      }
    </div>
  );
}
