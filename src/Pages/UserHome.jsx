import React from "react";
import Header from "../components/Header2/index";
import TestePoke from "../components/testePoke/index";
import Highlights from "../components/Highlights";
import "../Styles/UserHome.css";

export default function UserHome() {
  return (
    <div className="UserHome-container">
      <Header />
      <div className="Main-content">
        <div className="Title">
          <h3 className="Temas">Produtos</h3>
          <div className="BlueLine" />
        </div>
        <div className="products">
          <TestePoke />
        </div>
        <div className="Title">
          <h3>destaques</h3>
          <div className="BlueLine" />
        </div>
        <div className="Highlights">
          <Highlights />
        </div>
      </div>
    </div>
  );
}
