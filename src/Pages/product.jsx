import "../Styles/Products.css";
import Header from "../components/Header2/index";
import Footer from "../components/Footer/index";
import ProvImage from "../assets/image/ImagemEx.png";

export default function Products() {
  let n = 0;
  const desc = true;
  const p1 = 35.00;
  const p2 = 35.00;
  const p3 = 35.00;;

  return (
    //trocar o nome desta classe
    <div className="ProvName">
      <Header />
      <div className="productContainer">
        <h1>Produto {n}</h1>

        <div className="productContent">
          <aside className="imageContainer">
            <img src={ProvImage} alt="" />
          </aside>
          <aside className="descriptionContainer">
            {desc === true ? (
              <div className="discount">
                <p>De: R$ {p1}</p>
                <p>Por: R$ {p2}</p>
              </div>
            ) : (
              <p>R$ {p3}</p>
            )}
            <div className="description">
              <p>
                Uma descrição descritiva de um produto que descreve a própria
                descrição, descrevendo o indescritivel de maneira descrevivel:
              </p>
            </div>
          </aside>
          <aside className="buttonContainer">
            <button id="buyButton">Comprar agora</button>
            <button id="addCardButton">Adicionar ao carrinho</button>
          </aside>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
