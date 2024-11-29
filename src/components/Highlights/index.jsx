import "./style.css";
import { useEffect, useState } from "react";

export default function Highlights({ Items }) {
  const [NwPreco, setNwPreco] = useState([]); 

  useEffect(() => {
    const novosPrecos = Items.map(item => {
      return item.Desconto
        ? item.Preco - (item.Preco * (item.Val_Desconto / 100)) 
        : item.Preco;
    });
    setNwPreco(novosPrecos); 
  }, [Items]); 

  console.table(Items); 

  return (
    <section className="HighlightsContainer">
      {Items.map((item, i) => (
        <a href={`/Home/Product/${i}`} key={i}>
          <div className="Prod">
            <div>
              <img src={item.Imagem} alt={item.Nome} className="Highlight_Image" />
              <h2>{item.Nome}</h2>
            </div>
            {
              item.Desconto 
                ? <p><span>De:</span> {item.Preco},00<br /><span>Por:</span> {NwPreco[i]},00</p> 
                : <p><span>R$: </span>{item.Preco},00</p>
            }
          </div>
        </a>
      ))}
    </section>
  );
}
