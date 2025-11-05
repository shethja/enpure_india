import React from 'react';
import { Link } from 'react-router-dom';
import betterDigestion from '../assets/digestion.jpeg';
import heartHealth from '../assets/heartHealth.jpeg';
import purifyProcess1 from '../assets/purifyProcess1.png';
import purifyProcess2 from '../assets/purifyProcess2.png';
import immunity from '../assets/immunity.png';
import fitness from '../assets/fitness.jpg';
import skinHair from '../assets/skinHair.png';
import neurons from '../assets/neurons.jpeg';
import heroImage from '../assets/omar-gattis-Tf18kgGiop4-unsplash.jpg';
import ctaImage from '../assets/kobu-agency-TWIRIAizZFU-unsplash.jpg';
import { ArrowRight, Shield, Gauge, Droplets, Users, Award, Star, Smartphone, Atom, Sparkles } from 'lucide-react';
import { products } from '../data/products';
import { blogs } from '../data/blogs';
//import { testimonials } from '../data/testimonials';
import { fetchTestimonials, Testimonial } from '../data/firebasetestimonials';
import ProductCard from '../components/ProductCard';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';
import { Swiper, SwiperSlide } from 'swiper/react';
//import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const HomePage = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  //const [loadingTestimonials, setLoadingTestimonials] = useState(true);

  useEffect(() => {
    const getTestimonials = async () => {
      const fetched = await fetchTestimonials();
      setTestimonials(fetched);
      //setLoadingTestimonials(false);
    };
    getTestimonials();
  }, []);

  const healthBenefits = [
    {
      image: betterDigestion,
      title: "Better Digestion",
      description: "Clean water supports smoother digestion and nutrient absorption."
    },
    {
      image:heartHealth,
      title: "Healthy Heart & Kidneys",
      description: "Reduces toxins, helping your organs function at their best."
    },
    {
      image:neurons,
      title: "Sharper Mind",
      description: "Proper hydration improves focus, memory, and mood."
    },
    {
      image:skinHair,
      title: "Glowing Skin & Hair",
      description: "Pure water flushes out impurities for natural radiance."
    },
    {
      image:immunity,
      title: "Stronger Immunity",
      description: "Removes harmful microbes and supports overall health defense."
    },
    {
      image: fitness,      
      title: "More Energy, Less Fatigue",
      description: "Stay hydrated and active throughout your day."
    }
  ];

  const whyChooseUs = [
    {
      icon: <Shield className="h-12 w-12 text-blue-400" />,
      title: "Advanced Multi-Stage Filtration",
      description: "Removes impurities, heavy metals, and microbes for crystal-clear, safe water."
    },
    {
      icon: <Award className="h-12 w-12 text-blue-400" />,
      title: "Modern & Minimal Design",
      description: "Fits seamlessly into your kitchen, making purity part of your lifestyle."
    },
    {
      icon: <Droplets className="h-12 w-12 text-blue-400" />,
      title: "Eco-Friendly Technology",
      description: "Low water wastage and energy efficiency designed for sustainability."
    },
    {
      icon: <Users className="h-12 w-12 text-blue-400" />,
      title: "Trusted by Thousands",
      description: "Loved by homes across India for reliability, service, and quality."
    },
    {
      icon: <Smartphone className="h-12 w-12 text-blue-400" />,
      title: "Smartphone Application Control",
      description: "You can control the Ionizer through our Smartphone Application available on both iOS and Android."
    },
    {
      icon: <Gauge className="h-12 w-12 text-blue-400" />,
      title: "Auto TDS Controller",
      description: "Ionizer uses Auto TDS Controller to set TDS automatically so that the plates doesn't get damaged. "
    },
    {
      icon: <Atom className="h-12 w-12 text-blue-400" />,
      title: "Hydrogen Generation",
      description: "Ionizer generates upto 1700 PPB of Hydrogen. Unlock a new level of clean hydration which uses molecular hydrogen, also acting as a selective anti-oxidant. "
    },
    {
      icon: <Sparkles className="h-12 w-12 text-blue-400" />,
      title: "Auto-Cleaning Technology",
      description: "Ionizer uses Auto-Cleaning Technology. Auto-cleaning ensures peak performance, maximum output and zero maintenance hassle. "
    }
  ];
  

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Pure water background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/60"></div>
        </div>
        
        <div className="container mx-auto px-4">
          <div className="relative z-10 text-center max-w-5xl mx-auto fade-in">
            <h1 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tight">
              Enpure Water
              <span className="block text-blue-400 font-extralight">for Life</span>
            </h1>
            <p className="text-2xl text-white/90 mb-12 leading-relaxed font-light max-w-3xl mx-auto">
              Advanced Purification Technology meets Elegant Design. 
              Transform your Water, Transform your Health.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/products"
                className="modern-button bg-blue-875 text-white px-12 py-4 rounded-2xl text-lg font-medium hover:bg-blue-875 flex items-center justify-center space-x-3 shadow-2xl"
              >
                <span>Explore Products</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/blogs"
                className="modern-button bg-blue-875 text-white px-12 py-4 rounded-2xl text-lg font-medium hover:bg-blue-875 flex items-center justify-center space-x-3 shadow-2xl"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Health Benefits Section */}
      <AnimatedSection direction="up">
      <section className="py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
              Health Benefits of Enpure Water
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light leading-relaxed">
              Why Choosing Enpure matters for your Well-Being
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {healthBenefits.map((benefit, index) => (
              <motion.div key={index}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               viewport={{ once: true }}
               className="no-box-styling p-8 text-center slide-up" >
                <div className="flex justify-center mb-6 ">
                   <img
                    src={benefit.image}
                    alt={benefit.title}
                    className="h-80 w-80 object-cover drop-shadow-md rounded-3xl"
                    />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-4">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed font-light">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Why Choose Us Section */}
      <AnimatedSection direction="up">
      <section className="py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight" style={{color: 'white'}}>
              Why Families Trust Enpure
            </h2>
            <p className="text-xl text-slate-300 max-w-4xl mx-auto font-light leading-relaxed">
              We blend Advanced Purification with Sleek Design to bring you water that's Pure, Safe, and Healthy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {whyChooseUs.map((feature, index) => (
              <motion.div key={index}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: index * 0.1 }}
               viewport={{ once: true}}
               //style={{animationDelay: `${index * 0.15}s`}}
               className="no-box-styling p-8 slide-up" >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="text-2xl font-semibold mb-4" style={{color: '#FFFFFF'}}>{feature.title}</h3>
                    <p className="text-slate-300 leading-relaxed font-light">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* How It Works Section */}
      <AnimatedSection direction="up">
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
              Purity in Every Drop
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Our Advanced Purification and Ionization Process in Ionizers
            </p>
          </div>
          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 place-items-center mb-10">
            <div>
            <img
              src={purifyProcess1}
              alt="7-Layer Filtration"
              className="w-full max-w-[500px] h-auto lg:mx-20 object-cover rounded-3xl shadow-md"
            /><br/>
            <h3 className="text-2xl md:text-3xl font-semibold text-center mb-3">7-Layer Filtration</h3>
            <p className="text-center text-lg md:text-xl text-slate-600 font-light">
              Removes 99.9999% contaminants through Advanced Multi-Stage Process
            </p>
            </div>
            <div>
            <img
              src={purifyProcess2}
              alt="Ionization Technology"
              className="w-full max-w-[500px] h-auto lg:mx-20 object-cover rounded-3xl shadow-md"
            /><br/>
            <h3 className="text-center text-2xl md:text-3xl font-semibold mb-3">Ionization through Electrolysis Technology</h3>
            <p className="text-center text-lg md:text-xl text-slate-600 font-light">
              Produces Alkaline and Acidic Water through Electrolysis Plates
            </p>
            </div>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Testimonials Section */}
      <AnimatedSection direction="up">
      <section className="py-32 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
              Customer Stories
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Real Experiences from Families who chose Enpure
            </p>
          </div>

          <Swiper
            modules={[Autoplay]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 30 },
              1024: { slidesPerView: 2, spaceBetween: 40 },
            }}
            loop
            speed={6000}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            freeMode={true}
            allowTouchMove={true}
            className="!px-4"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
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
              </SwiperSlide>
            ))}
          </Swiper>
          <br/><br/>
          <div className="text-center">
            <Link
              to="/testimonials"
             //className="modern-button inline-flex items-center space-x-3 bg-blue-875 text-white px-16 py-5 rounded-2xl text-xl font-semibold hover:bg-blue-875 shadow-2xl"
            className="modern-button glass-card inline-flex bg-blue-875 text-black text-lg font-medium py-4 px-12 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg"
            >
              
              <span>View All Testimonials</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Featured Products */}
      <AnimatedSection direction="up">
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-5xl md:text-6xl font-light text-slate-900 mb-6 tracking-tight">
              Featured Products
            </h2>
            <p className="text-xl text-slate-600 font-light">
              Carefully Crafted Solutions for Every Home
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {products.slice(0,3).map((product,index) => (
              <motion.div key={product.id} 
              //className="slide-up"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true}} 
              className="no-box-styling p-8 slide-up"
              //style={{animationDelay: `${index * 0.1}s`}}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <Link
              to="/products"
              className="modern-button glass-card inline-flex bg-blue-875 text-black text-lg font-medium py-4 px-12 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg"
            >
              <span>View All Products</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      </AnimatedSection>

      {/* Blog/Education Section */}
      <AnimatedSection direction="up">
      <section className="py-32 bg-slate-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-20 fade-in">
            <h2 className="text-5xl md:text-6xl font-light mb-6 tracking-tight" style={{color: 'white'}}>
              The Science of Pure Water
            </h2>
            <p className="text-xl text-slate-300 font-light">
              Learn about Water Purification and Health
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogs.slice(0,3).map((post) => (
              <motion.div key={post.id}
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ duration: 0.5, delay: 0.1 }}
               viewport={{ once: true}} 
               className="no-box-styling overflow-hidden slide-up" 
              //style={{animationDelay: `${post.id * 0.1}s`}}
              >
                <div className="relative overflow-hidden group rounded-3xl">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent"></div>
                </div>
                <div className="p-6">
                  <div className="text-blue-400 text-sm mb-2">{post.readTime}</div>
                  <h3 className="text-xl font-semibold mb-3 line-clamp-2" style={{color: '#FFFFFF'}}>{post.title}</h3>
                  <p className="text-slate-300 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                  <Link
                      to={`/blogs/${post.slug}`}
                      className="text-blue-400 hover:text-blue-300 font-medium"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
            <Link
            to="/blogs"
            className="modern-button inline-flex items-center space-x-3 bg-blue-875 text-white px-12 py-4 rounded-2xl text-lg font-medium hover:bg-blue-875 shadow-2xl"
        >
            <span>View All Blogs</span>
            <ArrowRight className="h-5 w-5" />
            </Link>
        </div>

      </section>
      </AnimatedSection>

      {/* CTA Banner */}
      <AnimatedSection direction='up' delay={0.3}>
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={ctaImage}
            alt="Pure water lifestyle"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-slate-800/60"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto fade-in">
            <h2 className="text-5xl md:text-6xl font-light text-white mb-4 tracking-tight">
              Transform Your Water,
              <span className="block text-blue-300">Transform Your Health</span>
            </h2>
            <p className="text-2xl mb-12 text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
              Experience the Difference Enpure Water makes. Join thousands of Satisfied Customers.
            </p>
            <br/>
            
            <div className="flex flex-col sm:flex-row gap-10 justify-center">
              <Link
                to="/installation"
                className="modern-button inline-flex items-center bg-blue-875 text-white px-12 py-4 rounded-2xl text-lg font-medium hover:bg-blue-875 flex items-center justify-center space-x-3 shadow-2xl"
                //className="modern-button glass-card bg-blue-875 text-black py-4 px-6 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg font-medium"
              >
                <span>Book a Live In-Person Demo</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <a
                href="tel:+917016038671"
                className="modern-button inline-flex items-center bg-blue-875 text-white px-12 py-4 rounded-2xl text-lg font-medium hover:bg-blue-875 flex items-center justify-center space-x-3 shadow-2xl"
                //className="modern-button glass-card bg-blue-875 text-black py-4 px-6 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg font-medium"
              >
                <span>Call Now for a Live Video Call Demo</span>
                <ArrowRight className="h-5 w-5" />
              </a>
            </div>

<br/>

            <Link
              to="/products"
             //className="modern-button inline-flex items-center space-x-3 bg-blue-875 text-white px-16 py-5 rounded-2xl text-xl font-semibold hover:bg-blue-875 shadow-2xl"
            className="modern-button inline-flex items-center bg-blue-875 text-white px-12 py-4 rounded-2xl text-lg font-medium hover:bg-blue-875 flex items-center justify-center space-x-3 shadow-2xl"
            >
              
              <span>Shop Now</span>
              <ArrowRight className="h-5 w-5" />
            </Link>

            {/*
            <Link
              to="/uploadProducts"
             //className="modern-button inline-flex items-center space-x-3 bg-blue-875 text-white px-16 py-5 rounded-2xl text-xl font-semibold hover:bg-blue-875 shadow-2xl"
            className="modern-button inline-flex items-center bg-blue-875 text-white px-12 py-4 rounded-2xl text-lg font-medium hover:bg-blue-875 flex items-center justify-center space-x-3 shadow-2xl"
            >
              <span>Upload now</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
            */}

          </div>
        </div>
      </section>
      </AnimatedSection>

    </div>
  );
};

export default HomePage;