import "../Styles/About.css";
import Header from "../components/Header2";
import Footer from "../components/Footer"

export default function About() {
  return (
    <div className="AboutContainer">
      <Header />
      <div className="AboutContent">
        <img src="https://picsum.photos/200/300" alt="" />
        <p>
          O BuyFlow foi desenvolvido com o intuito de auxiliar nas compras dos usuários e na organização das empresas provendo métricas de cada produto com o intuito de auxiliar em suas futuras decisões. 
        </p>
      </div>
      <Footer />
    </div>
  );
}
