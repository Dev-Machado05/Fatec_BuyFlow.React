import React from "react";
import Header from "../components/Header2";
import Carroussel from "../components/carroussel";
import Highlights from "../components/Highlights";
import Footer from "../components/Footer"
import "../Styles/UserHome.css";

export default function UserHome() {
  return (
    <div className="UserHome-container">
      <Header />
      <div className="Main-content">
        <div className="Title">
          <h3>Produtos</h3>
          <div className="BlueLine" />
        </div>
        <div className="products">
          <Carroussel />
        </div>
        <div className="Title">
          <h3>destaques</h3>
          <div className="BlueLine" />
        </div>
        <div className="Highlights">
          <Highlights />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
