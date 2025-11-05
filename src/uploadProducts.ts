// src/uploadProducts.ts
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { products } from "./data/products";

const firebaseConfig = {
  apiKey: "AIzaSyCbihAyvXl9_TXh3tI_qnEq288KA8oEsak",
  authDomain: "enpure-india.firebaseapp.com",
  projectId: "enpure-india",
  storageBucket: "enpure-india.firebasestorage.app",
  messagingSenderId: "966600747547",
  appId: "1:966600747547:web:9caf222e0c1d9fc0b3a6be"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


const uploadProducts = async () => {
  try {
    const productsCollection = collection(db, "products");

    for (const product of products) {
      await addDoc(productsCollection, product);
      console.log(`✅ Uploaded: ${product.name}`);
    }

    console.log("🎉 All products uploaded successfully!");
  } catch (error) {
    console.error("❌ Error uploading products:", error);
  }
};

uploadProducts();
