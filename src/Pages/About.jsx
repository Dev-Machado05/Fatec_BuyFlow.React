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
          Um texto para um Hero no qual irá descrever as funcionalidades do
          software e como ele funciona.
        </p>
      </div>
      <Footer />
    </div>
  );
}
