// src/services/database.js
import { ref, set, push } from 'firebase/database';
import { database } from './firebase';

// Função para adicionar produto
export const addProduct = (product) => {
  const productRef = ref(database, 'products/');
  const newProductRef = push(productRef); // Cria um novo ID único para o produto
  return set(newProductRef, product); // Salva o produto no banco de dados
};

