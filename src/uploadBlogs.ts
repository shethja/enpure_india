import { blogs } from "./data/blogs";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { initializeApp } from "firebase/app";

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


export async function uploadBlogs() {
  const blogsCollection = collection(db, "blogs");

  for (const blog of blogs) {
    await addDoc(blogsCollection, blog);
    console.log("Blogs added:", blog.id);
  }

  console.log("✅ Blogs uploaded successfully!");
}
