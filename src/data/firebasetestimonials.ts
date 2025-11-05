import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

export interface Testimonial {
  id: number;
  name:string;
  location:string;
  image:string;
  quote:string;
  rating:number;
}

export async function fetchTestimonials(): Promise<Testimonial[]> {
  try {
    const testimonialsRef = collection(db, "testimonials");
    const snapshot = await getDocs(testimonialsRef);

    const testimonials: Testimonial[] = snapshot.docs.map((doc) => {
      const data = doc.data() as Omit<Testimonial, "id"> | Testimonial;

      // Only add `doc.id` if data doesn't already have one
      return {
        ...data,
        id: (data as any).id ?? doc.id,
      };
    });

    return testimonials;
  } catch (error) {
    console.error("❌ Error fetching testimonials:", error);
    return [];
  }
}