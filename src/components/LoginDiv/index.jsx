import React, { useEffect, useState } from "react";
import "./style.css";

import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection } from "firebase/firestore";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyBoItkTZ55gznQwGMIz_gFTgLvSOO62jTI",
  databaseURL: "https://buyflow-edc53-default-rtdb.firebaseio.com",
  projectId: "buyflow-edc53",
});

const db = getFirestore(firebaseApp);
const userCollectionRef = collection(db, "Users");

export default function LoginDiv() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [UsersDatabase, setUsersDatabase] = useState([]);
  const [User, setUser] = useState(null);
  const [ErrorDisplay, setErrorDisplay] = useState(false);  

  useEffect(() => {
    const getUsers = async () => {
      const Data = await getDocs(userCollectionRef);
      setUsersDatabase(Data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  function UserVerifier() {
    if (Username === "") return false;

    for (let i = 0; i < UsersDatabase.length; i++) {
      const user = UsersDatabase[i];
      if ((Username === user.Name || Username === user.Email) && user.Password === Password) {
        setUser(user);
        return i;  
      }
    }
    return -1;
  }

  function verify() {
    const userIndex = UserVerifier();

    if (userIndex !== -1) {
      if (UsersDatabase[userIndex].Commercial) {
        window.location.href = `/AdmHome/${userIndex}`;
      } else {
        window.location.href = `/Home/${userIndex}`;
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
            {ErrorDisplay && <p className="Error-Text">Usuário ou senha inválidos</p>}
          </div>
        </div>

        <div className="AContainer">
          <a href="/Sign-Up">Criar uma conta</a>
          <a href="#">Esqueceu a senha</a>
        </div>

        <button className="SubmitButton" onClick={verify}>
          Conectar
        </button>
      </div>
    </div>
  );
}
