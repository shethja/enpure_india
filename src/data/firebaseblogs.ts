import { db } from "../firebase";
import { collection, getDocs, orderBy, query } from "firebase/firestore";

export interface Blog {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  metaTitle: string;
  metaDescription: string;
  keywords:string[];
  content: string;
  image: string;
  readTime: string;
  date: string;
}

export async function fetchBlogs(): Promise<Blog[]> {
  try {
    const blogsRef = collection(db, "blogs");
    const q = query(blogsRef, orderBy("id"));
    const snapshot = await getDocs(q);

    const blogs: Blog[] = snapshot.docs.map((doc) => {
      const data = doc.data() as Omit<Blog, "id"> | Blog;

      // Only add `doc.id` if data doesn't already have one
      return {
        ...data,
        id: (data as any).id ?? doc.id,
      };
    });

    return blogs;
  } catch (error) {
    console.error("❌ Error fetching testimonials:", error);
    return [];
  }
}