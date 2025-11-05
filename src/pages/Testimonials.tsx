import { useEffect, useState } from "react";
import { fetchTestimonials, Testimonial } from "../data/firebasetestimonials";
import { Star } from 'lucide-react';
import { Link } from "react-router-dom";
const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    fetchTestimonials().then(data => setTestimonials(data));
  }, []);

  return (
    <>
    <article className="py-16 bg-white text-slate-900">
        <div className="container mx-auto px-4 max-w-4xl">
            <h1 className="text-5xl font-light mb-3">Reviews/Testimonials (Customer Stories) </h1>
            <br/>
      {testimonials.map(testimonial => (
        <div
                  className="modern-button p-8 hover:bg-slate-50 slide-up h-full flex flex-col justify-between"
                  style={{ animationDelay: `${testimonial.id * 0.1}s` }}
                >
                  <div>
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                      ))}
                    </div>
                    <p className="text-slate-700 mb-6 text-base md:text-lg leading-relaxed font-light italic">
                      "{testimonial.quote}"
                    </p>
                  </div>
                  <div className="flex items-center mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-slate-900">{testimonial.name}</h4>
                      <p className="text-slate-500 text-sm">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
      ))}

    <br/><br/>
            <Link to="/" className=" text-blue-600 font-medium hover:text-blue-900">
            ← Back to Home
            </Link>

    </div>
    </article>
    </>
  );
};

export default Testimonials;
