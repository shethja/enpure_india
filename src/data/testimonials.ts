
// src/data/blogs.ts
export interface Testimonial {
  id: number;
  name:string;
  location:string;
  image:string;
  quote:string;
  rating:number;
}

export const testimonials: Testimonial[] = [
    {
      id:1,  
      name: "Rajesh Kumar",
      location: "Delhi",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "The water quality is exceptional. Our family has noticed a real difference in taste and health since switching to Enpure.",
      rating: 5
    },
    {
      id:2,
      name: "Priya Sharma",
      location: "Mumbai",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Professional installation and outstanding customer service. The design perfectly complements our modern kitchen.",
      rating: 5
    },
    {
      id:3,  
      name: "Amit Patel",
      location: "Bangalore",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Incredible value and reliability. The system has been flawless for over two years. Highly recommend Enpure.",
      rating: 5
    },
    {
      id:4,
      name: "Sneha Rao",
      location: "Hyderabad",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Incredible value and reliability. The system has been flawless for over two years. Highly recommend Enpure.",
      rating: 5
    },
    {
      id:5,
      name: "Arjun Kumar",
      location: "Surat",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150",
      quote: "Incredible value and reliability. The system has been flawless for over two years. Highly recommend Enpure.",
      rating: 5
    }
  ];