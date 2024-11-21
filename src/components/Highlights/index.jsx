import "./style.css";
// import TempImage from "../../assets/image/ImagemEx (1).png";

export default function Highlights({ Items }) {
  return (
    <div className="HighlightsContainer">
      {Array.from({ length: Items.length }).map((_, i) => (
        <a href={`/Home/Product/${i}`} key={i}>
          <div className="Prod">
            <img src={ Items[i].Imagem } alt="" />
            <h2>{ Items[i].Nome }</h2>
            <p>{ Items[i].Preco }</p>
          </div>
        </a>
      ))}
    </div>
  );
}
