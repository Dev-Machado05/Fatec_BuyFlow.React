import "./style.css";
import TempImage from "../../assets/image/ImagemEx (1).png";

export default function Highlights() {
  return (
    <div className="HighlightsContainer">
      {Array.from({ length: 20 }).map((_, i) => (
        <a href={`/home/${i}`}>
          <div className="Prod">
            <img src={TempImage} alt="" />
            <h2>Prod {i}</h2>
            <p>///Preço///</p>
          </div>
        </a>
      ))}
    </div>
  );
}