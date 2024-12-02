import React from "react";
import Header from "../components/Header2";
import Carroussel from "../components/carroussel";
import Highlights from "../components/Highlights";
// import Footer from "../components/Footer";
import "../Styles/UserHome.css";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import { db, userCollectionRef, productCollectionRef } from "../backend/server";

// const firebaseApp= initializeApp ({
//   apiKey: "AIzaSyBoItkTZ55gznQwGMIz_gFTgLvSOO62jTI",
//   databaseURL: "https://buyflow-edc53-default-rtdb.firebaseio.com",
//   projectId: "buyflow-edc53",
// });
// 
// const db = getFirestore(firebaseApp);
// const userCollectionRef = collection(db, "Users")


export default function UserHome() {
  const [UsersDatabase, setUsersDatabase] = useState([]);
  const [ProductDatabase, setProductDatabase] = useState([]);
  const [User, setUser] = useState([]);
  const [ErrorDisplay, setErrorDisplay] = useState([]);
  
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
        localStorage.setItem('userName', user.Name);
        localStorage.setItem('userCommercial', user.Commercial);
      }
    }
  }, [UsersDatabase, UserIndex]);


  console.table(User)
 
 return (
    <div className="UserHome-container">
      <Header/>
      <div className="Main-content">
        <div className="Title">
          <h3>Produtos</h3>
          <div className="BlueLine" />
        </div>
        <div className="products">
          <Carroussel Items={ProductDatabase} />
        </div>
        <div className="Title">
          <h3>destaques</h3>
          <div className="BlueLine" />
        </div>
        <div className="Highlights">
          <Highlights Items={ProductDatabase} />
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
}
