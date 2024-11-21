import React from "react";
import { useState } from "react";
import "./style.css";
// import { auth, db } from "../../backend/server";
var conf = false;

export default function SignUpDiv() {
  const [display, setDisplay] = useState(false);
  const [displayTermError, setDisplayTermError] = useState(false);
  const [PasswordError, setPasswordError] = useState(false);
  let TermOfUse = false;
  const [Email, setEmail] = useState("");
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  let EmpAccount = false;



  // const handleRegister = () => {
  //   auth
  //     .createUserWithEmailAndPassword(Email, Password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;

  //       // Salva informações adicionais no Realtime Database
  //       return db.ref("usuarios/" + user.uid).set({
  //         nome: Username,
  //         email: Email,
  //         tipoConta: EmpAccount // Salva como booleano
  //       });
  //     })
  //     .then(() => {
  //       console.log("Usuário registrado com sucesso!");
  //       setError(''); // Limpa qualquer erro anterior ao registrar com sucesso
  //     })
  //     .catch((error) => {
  //       if (error.code === "auth/email-already-in-use") {
  //         setError("Esse email já está em uso. Por favor, escolha outro.");
  //       } else {
  //         setError("Erro ao registrar usuário: " + error.message);
  //       }
  //       console.error("Erro ao registrar usuário:", error);
  //     });
  // };

  // const Register = () => {
  //   // Usa isEmpresarial como um booleano para definir o tipo de conta
  //   auth.createUserWithEmailAndPassword(Email, Password)
  //     .then((userCredential) => {
  //       const user = userCredential.user;

  //       // Salva informações adicionais no Firestore
  //       return db.collection('usuarios').doc(user.uid).set({
  //         nome: nome,
  //         email: Email,
  //         tipoConta: isEmpresarial // Salva como booleano: true para empresarial, false para comum
  //       });
  //     })
  //     .then(() => {
  //       console.log("Usuário registrado com sucesso!");
  //     })
  //     .catch((error) => {
  //       console.error("Erro ao registrar usuário:", error);
  //     });
  // };
  
  function Goto() {
    if (Password != "" && Password === ConfirmPassword) {
      // handleRegister();
    } else {
      setPasswordError( true );
    }
  }
  
  function Confirmation() {
    if (TermOfUse) {
      console.log("Deu Certo");
      Goto();
    } else {
      setDisplayTermError( true );
      console.log("Deu errado");
    }
  }
  
  const TermOfUseCheckbox = (event) => {
    TermOfUse = !TermOfUse;
  };

  const EmpressAccountCheckbox = (event) => {
    if (!conf) {
      EmpAccount = true;
      conf = true;
      changeDisplay();
    } else {
      EmpAccount = false;
      conf = false;
    }
  };

  function changeDisplay() {
    setDisplay((prevDisplay) => !prevDisplay);
  }

  return (
    <div className="SignUpDiv">
      <div className="SingUpContainer">
        <h1>Cadastrar</h1>
        <div className="SingUpContent">
          <div className="InputContainer2">
            <label htmlFor="">Email: </label>
            <input
              type="email"
              id=""
              placeholder="Email"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="InputContainer2">
            <label htmlFor="">Nome Completo: </label>
            <input
              type="text"
              id=""
              placeholder="Full Name"
              value={Username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="InputContainer2">
            <label htmlFor="">Senha: </label>
            <input
              type="password"
              id=""
              placeholder="Password"
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="InputContainer2">
            <label htmlFor="">Confirmação da Senha: </label>
            <input
              type="password"
              id=""
              placeholder="Confirm Password"
              value={ConfirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {
            PasswordError ? (
              <p className="ErrorText">* As senhas não conferem</p>
            ) : null
            }
          </div>
          <div className="CheckboxContainer">
            <div className="CheckboxContent">
              <input type="checkbox" onChange={TermOfUseCheckbox} />
              <label htmlFor="">Eu concordo com os termos de uso</label>
              {
              displayTermError ? (
                <p className="ErrorText">* Concorde com os termos de uso para continuar</p>
              ) : null
              }
            </div>
            <div className="CheckboxContent">
              <input type="checkbox" onChange={EmpressAccountCheckbox} />
              <label htmlFor="">Conta Empresarial</label>
            </div>
          </div>
        </div>

        <a href="/">Já tem uma conta</a>

        <button className="SubmitButton2" onClick={Confirmation}>
          Cadastrar
        </button>
      </div>

      {display === true ? (
        <div className="Blur">
          <main>
            <h1 className="AtentionDp">Atenção</h1>
            <p>
              Ao selecionar isso você vai utiluzar essa conta somente para uso
              Empresarial. <br />
              Você deseja manter a conta desta maneira?
            </p>
            <button onClick={changeDisplay}>Confirmar</button>
          </main>
        </div>
      ) : null}
    </div>
  );
}
