import Header from "../components/Header2/index";
import Carroussel from "../components/carroussel";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import { getDocs } from "firebase/firestore";
import { db, userCollectionRef, productCollectionRef } from "../backend/server"

export default function AdmHome() {
    const [UsersDatabase, setUsersDatabase] = useState([]);
    const [ProductDatabase, setProductDatabase] = useState([]);
    const [User, setUser] = useState([]);

    const UserIndex = ((window.location.href).substring((window.location.href).lastIndexOf("/"))).substring(1);

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
        if (UsersDatabase.length > 0) {
          const user = UsersDatabase[UserIndex]; 
          setUser(user); 
          if (user) {
            localStorage.setItem('userName', User.Name);
            localStorage.setItem('userCommercial', User.Commercial);
          }
        }
      }, [UsersDatabase, UserIndex]);

    return (
        <div className="AdmHome">
            <Header/>
            <div className="AdmHome-content">
                <div className="Title">
                    <h3>Meus Produtos</h3>
                    <div className="BlueLine" />
                </div>
                <div className="Products">
                    <Carroussel Items={ProductDatabase}/>
                </div>
                <div className="Title">
                    <h3>Dados das Vendas</h3>
                    <div className="BlueLine"></div>
                </div>
                <div className="ProductData">
                    <Statistics />
                </div>
                <button className="ExportButton">Exportar dados para PDF</button>
            </div>
            {/* <Footer /> */}
        </div>
    )
}