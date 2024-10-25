import './style.css';
import ExImage2 from "../../assets/image/ExImage2.png";

export default function Statistics() {
    return(
        <div className="statistics">
            {Array.from({ length: 20 }).map((_, i) => (
                <a href={`/AdmHome/${i}`}>
                    <div className="ProdData">
                        <img src={ExImage2} alt="" />
                        <h2>Produto {i}</h2>
                        <p>-- Preço --</p>
                    </div>
                </a>
            ))}
        </div>
    );
}