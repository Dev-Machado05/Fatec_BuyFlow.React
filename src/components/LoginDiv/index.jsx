import React, { useEffect } from "react";
import { useState } from "react";
// import { getUsers } from "../../backend/server.js"
import "./style.css";
/////

import { initializeApp  } from "firebase/app";
import { getFirestore, getDocs, collection, doc } from "firebase/firestore";

const firebaseApp = initializeApp ({
  apiKey: "AIzaSyBoItkTZ55gznQwGMIz_gFTgLvSOO62jTI",
  // authDomain: "buyflow-edc53.firebaseapp.com",
  databaseURL: "https://buyflow-edc53-default-rtdb.firebaseio.com",
  projectId: "buyflow-edc53",
  // storageBucket: "buyflow-edc53.firebasestorage.app",
  // messagingSenderId: "837926171347",
  // appId: "1:837926171347:web:e2a9e9c3dd3e038effda26"
});

const db = getFirestore(firebaseApp);
const userCollectionRef = collection(db, "Users")



/////





export default function LoginDiv() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [UsersDatabase, setUsersDatabase] = useState([]);
  const [User, setUser] = useState([]);
  const [ErrorDisplay, setErrorDisplay] = useState([]);
  let UserIndex = 0;
  ///////
  
  useEffect(() => {
    const getUsers = async () => {
      const Data = await getDocs(userCollectionRef);
      setUsersDatabase(Data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);


  ////////
  function UserVerifier() {
    if (Username === "") return false;

    for (let i = 0; i < UsersDatabase.length; i++) {
      if ((Username === UsersDatabase[UserIndex].Name || Username === UsersDatabase[UserIndex].Email) && UsersDatabase[UserIndex].Password === Password) {
        setUser(UsersDatabase[UserIndex]);
        UserIndex = i;
        return true; 
      }
      UserIndex++;
    }
    return false;
  }

  
  function verify() {
    if (UserVerifier()) {
      if (UsersDatabase[UserIndex].Commercial) {
        window.location.href = `/AdmHome/${UserIndex}`;
      } else {
        window.location.href = `/Home/${UserIndex}`;
      }
    } else {
      setErrorDisplay(true);
    }
  }


  return (
    <div className="login-div">
      <div className="LoginContainer">
        <h1>Conectar</h1>
        <div className="LoginContent">
          <div className="InputContainer">
            <label>Usuário: </label>
            <input
              type="text"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>

          <div className="InputContainer">
            <label>Senha: </label>
            <input
              type="password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          { ErrorDisplay === true ? <p className="Error-Text">Usuário ou senha inválidos</p> :
            null }
          </div>
        </div>

        <div className="AContainer">
          <a href="/Sign-Up">Criar uma conta</a>
          <a href="">Esqueceu a senha</a>
        </div>

        <button className="SubmitButton" onClick={verify}>
          Conectar
        </button>
      </div>
    </div>
  );
}
