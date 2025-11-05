import { testimonials } from "./data/testimonials";
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


export async function uploadTestimonials() {
  const testimonialsCollection = collection(db, "testimonials");

  for (const testimonial of testimonials) {
    await addDoc(testimonialsCollection, testimonial);
    console.log("Testimonial added:", testimonial.id);
  }

  console.log("✅ Testimonials uploaded successfully!");
}
