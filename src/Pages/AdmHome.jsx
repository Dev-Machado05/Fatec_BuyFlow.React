import Header from "../components/Header2/index";
import Carroussel from "../components/carroussel";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";

export default function AdmHome() {
    return (
        <div className="AdmHome">
            <Header/>
            <div className="AdmHome-content">
                <div className="Title">
                    <h3>Meus Produtos</h3>
                    <div className="BlueLine" />
                </div>
                <div className="Products">
                    <Carroussel/>
                </div>
                <div className="Title">
                    <h3>Dados das Vendas</h3>
                    <div className="BlueLine"></div>
                </div>
                <div className="ProductData">
                    <Statistics />
                </div>
                <button className="ExportButton">Exportar dados para PDF</button>
            </div>
            {/* <Footer /> */}
        </div>
    )
}