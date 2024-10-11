import React from "react";
import Logo from "../../assets/image/Logo1.jpeg";
import UserIcon from "../../assets/image/user.png";
import SearchBt from "../../assets/image/Vector.svg";
import "./style.css";

export default function Header2() {
  return (
    <div className="HeaderContainer2">
      <a href="\home">
        <div className="LogoContainer2">
          <img src={Logo} alt="Icone da logo" />
          <p>BuyFlow</p>
        </div>
      </a>

      <div className="SearchBar">
        <input type="text" name="" id="" />
        <button>
          <img src={SearchBt} alt="" />
        </button>
      </div>
      {/* Implementar a side bar */}
      {/* <nav>
                <a href=""><strong>Home</strong></a>
                <a href="">Compras</a>
                <a href="">Sobre</a>
            </nav> */}
      <div className="UserAccount">
        <p>User</p>
        <img src={UserIcon} alt="Imagem do usuário" />
      </div>
    </div>
  );
}
