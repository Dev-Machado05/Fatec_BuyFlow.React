import { initializeApp  } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseApp = initializeApp ({
  apiKey: "AIzaSyBoItkTZ55gznQwGMIz_gFTgLvSOO62jTI",
  databaseURL: "https://buyflow-edc53-default-rtdb.firebaseio.com",
  projectId: "buyflow-edc53",
});

const db = getFirestore(firebaseApp);
const userCollectionRef = collection(db, "Users");
const productCollectionRef = collection(db, "Products"); 


export { db, userCollectionRef, productCollectionRef };