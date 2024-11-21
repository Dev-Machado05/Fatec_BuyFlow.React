import "../Styles/Products.css";
import Header from "../components/Header2/index";
import Footer from "../components/Footer/index";
import { useState, useEffect } from "react";
import { userCollectionRef, productCollectionRef } from "../backend/server";
import { getDocs } from "firebase/firestore";

export default function Products() {
  const [UsersDatabase, setUsersDatabase] = useState([]);
  const [ProductDatabase, setProductDatabase] = useState([]);
  const [Product, setProduct] = useState(null);
  const [Preco, setPreco] = useState(null);
  const [Desc, setDesc] = useState(null);
  const [Imagem, setImagem] = useState(null);
  const [Nome, setNome] = useState(null);
  const [ValDesconto, setValDesconto] = useState(null);
  const [NwPreco, setNwPreco] = useState(null);
  const [Descricao, setDescricao] = useState(null);

  const url = window.location.href;
  const num = url.substring(url.lastIndexOf("/"));
  const UserIndex = num.substring(1);

  useEffect(() => {
    const getUsers = async () => {
      const Data = await getDocs(userCollectionRef);
      const ProductData = await getDocs(productCollectionRef);
      setUsersDatabase(Data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setProductDatabase(ProductData.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  useEffect(() => {

    if (ProductDatabase.length > 0 && UserIndex) {
      const product = ProductDatabase[UserIndex];
      setProduct(product);
      setPreco(product?.Preco);
      setDesc(product?.Desconto);
      setImagem(product?.Imagem);
      setNome(product?.Nome);
      setValDesconto(product?.Val_Desconto);
      setNwPreco(Preco-(Preco*(ValDesconto / 100)));
      setDescricao(product?.Descricao);
    }
  }, [ProductDatabase, UserIndex]);

  return (
    <div className="ProvName">
      <Header />
      <div className="productContainer">
        <h1>{ Nome }</h1>

        <div className="productContent">
          <aside className="imageContainer">
            {Imagem && <img src={Imagem} alt="Produto" />}
          </aside>
          <aside className="descriptionContainer">
            {Desc === true ? (
              <div className="discount">
                <p>De: R$ {Preco}</p>
                <p>Por: R$ {NwPreco}</p>
              </div>
            ) : (
              <p>R$ {Preco}</p>
            )}
            <div className="description">
              <p>
                { Descricao }
              </p>
            </div>
          </aside>
          <aside className="buttonContainer">
            <button id="buyButton">Comprar agora</button>
            <button id="addCardButton">Adicionar ao carrinho</button>
          </aside>
        </div>
      </div>
      <Footer />
    </div>
  );
}
