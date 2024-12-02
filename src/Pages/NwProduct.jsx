import { useState } from "react";
import "../Styles/NwProduct.css";
import Header from "../components/Header2";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../backend/server";

export default function NwProduct() {
  const [Nome, setNome] = useState("");
  const [Descricao, setDescricao] = useState("");
  const [Cores, setCores] = useState("");
  const [Imagem, setImagem] = useState("");
  const [Preco, setPreco] = useState(0);
  const [Desconto, setDesconto] = useState(false);
  const [Val_Desconto, setVal_Desconto] = useState(0);

  function Verify() {
    if (
      Nome !== "" &&
      Descricao !== "" &&
      Cores !== "" &&
      Imagem !== "" &&
      Preco !== 0
    ) {
      if (Desconto && Val_Desconto != 0) {
        return true;
      } else if (Desconto && Val_Desconto == 0) {
        return false;
      }
      return true;
    }
    return false;
  }

  async function criarProduto() {
    if (Verify()) {
      try {
        const user = await addDoc(collection(db, "Products"), {
          Nome,
          Descricao,
          Cores,
          Imagem,
          Preco,
          Desconto,
          Val_Desconto,
        });

        alert("Produto adicinado com sucesso");
        console.log("dados salvos com sucessos", user);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    } else {
        alert("Algo não está preenchido")
    }
  }

  const DescontoCheckbox = (event) => {
    setDesconto(!Desconto)
  };

  return (
    <div className="NwContainer">
      <Header />

      <div className="NwContent">
        <section>
          <table>
            <tr>
              <td>
                <label>Nome:</label>
              </td>
              <td className="NwInputContainer" onChange={(e) => setNome(e.target.value)}>
                <input type="text"></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Descrição:</label>
              </td>
              <td className="NwInputContainer">
                <input type="text" onChange={(e) => setDescricao(e.target.value)}></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Cor:</label>
              </td>
              <td className="NwInputContainer">
                <input type="text" onChange={(e) => setCores(e.target.value)}></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Imagem (URL):</label>
              </td>
              <td className="NwInputContainer">
                <input type="url" onChange={(e) => setImagem(e.target.value)}></input>
              </td>
            </tr>
            <tr>
              <td>
                <label>Preço:</label>
              </td>
              <td className="NwInputContainer">
                <input type="number" onChange={(e) => setPreco(e.target.value)}></input>
              </td>
            </tr>
            <tr>
              <td className="Checkbox">
                <label>Desconto:</label>
              </td>
              <td>
                <input type="checkbox" name="" onChange={DescontoCheckbox}/>
              </td>
            </tr>
            <tr>
              <td>
                <label>Valor Desconto (%):</label>
              </td>
              <td className="NwInputContainer">
                <input type="number" onChange={(e) => setVal_Desconto(e.target.value)}></input>
              </td>
            </tr>
          </table>
          <button className="submit" onClick={criarProduto}>
            Enviar
          </button>
        </section>
      </div>
    </div>
  );
}
