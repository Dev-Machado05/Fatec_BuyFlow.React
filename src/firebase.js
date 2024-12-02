
    // src/firebase.js
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Sua configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBoItkTZ55gznQwGMIz_gFTgLvSOO62jTI",
    authDomain: "buyflow-edc53.firebaseapp.com",
    databaseURL: "https://buyflow-edc53-default-rtdb.firebaseio.com",
    projectId: "buyflow-edc53",
    storageBucket: "buyflow-edc53.appspot.com",
    messagingSenderId: "837926171347",
    appId: "1:837926171347:web:e2a9e9c3dd3e038effda26"
};

// Inicialize o Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database };
