import Footer from '../components/Footer';
import Header from '../components/Header1';
import ErrorImage from '../assets/image/error-404-removebg-preview (1).png'
import '../Styles/error.css';

export default function Error() {
    return (
        <div className="ErrorContainer">
            <Header />
            <div className="ErrorContent">
                <img src={ErrorImage} alt="" />
                <main>
                    <h1>Erro 404</h1>
                    <p>Página não encontrada</p>
                </main>
            </div>
            <Footer />
        </div>
    );
}