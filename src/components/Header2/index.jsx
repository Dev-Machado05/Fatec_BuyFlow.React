import React, { useEffect, useState } from "react";
import Logo from "../../assets/image/Logo1.jpeg";
import UserIcon from "../../assets/image/user.png";
import SearchBt from "../../assets/image/Vector.svg";
import SideBar from "../SideBar";
import "./style.css";

export default function Header2() {

  const [display, setDisplay] = useState(false);
  const [UserName, setUserName] = useState('');
  const [Commercial, setCommercial] = useState(false);
  
  useEffect(() => {
    const ConnectedUserCommercial = localStorage.getItem('userCommercial');
    const ConnectedUserName = localStorage.getItem('userName');
    if (ConnectedUserName) {
      setUserName(ConnectedUserName);
      setCommercial(ConnectedUserCommercial);
    }  
  }, []);

  function ChangeDisplay() {
  setDisplay(!display);
  }
  
  return (
    <>
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
        <button className="UserAccount" onClick={ChangeDisplay}>
          <p>{ UserName }</p>
          <img src={UserIcon} alt="Imagem do usuário" />
        </button>
      </div>
      { display === true ? <SideBar /> : null }
    </>
  );
}
