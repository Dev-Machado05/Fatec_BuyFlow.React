import "./style.css";
import TempImage from "../../assets/image/ImagemEx (1).png";

export default function Carroussel() {
  
  const urlAtual = window.location.href;
  const page = urlAtual.split("/")[3]; 
  
  return (
    <div className="carroussel">
      {
       page === "Home" ? 
       Array.from({ length: 20 }).map((_, i) => (
         <a href={`/Home/${i}`}>
           <div className="carrousselItem">
             <img src={TempImage} alt="" />
             <h2>Prod {i}</h2>
             <p>///Preço///</p>
           </div>
         </a>
       )) :
       Array.from({ length: 20 }).map((_, i) => (
         <a href={`/AdmHome/${i}`}>
           <div className="carrousselItem">
             <img src={TempImage} alt="" />
             <h2>Prod {i}</h2>
             <p>///Preço///</p>
           </div>
         </a>
       )) 
       
      };
    </div>
  );
}
