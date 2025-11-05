import React from 'react';
import { Award, Users, Zap, Heart, CheckCircle, Star } from 'lucide-react';
import founder from '../assets/founder.png';
import ourStory from '../assets/ourStory.jpeg';
import aboutEnpure from '../assets/kobu-agency-TWIRIAizZFU-unsplash.jpg';
import directorMarketing from '../assets/directorMarketing.jpeg';
import makeInIndia from '../assets/makeInIndia.png';

const About = () => {
  const stats = [
    { number: '50,000+', label: 'Happy Customers' },
    { number: '15+', label: 'Years of Experience' },
    { number: '100+', label: 'Cities Covered' },
    { number: '99.9%', label: 'Customer Satisfaction' },
  ];

  const values = [
    {
      icon: <Award className="h-8 w-8 text-blue-900" />,
      title: 'Quality Excellence',
      description:
        'We believe that pure water begins with pure standards. Every Enpure product is built with advanced technology, premium components, and rigorous testing to ensure reliability, safety, and lasting performance you can trust.',
    },
    {
      icon: <Users className="h-8 w-8 text-blue-900" />,
      title: 'Customer First',
      description:
        'Our customers are at the heart of everything we do. From design to after-sales service, we focus on creating seamless experiences, ensuring your family’s health, comfort, and peace of mind come first — always.',
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-900" />,
      title: 'Innovation',
      description:
        'Innovation drives our mission to redefine water purification. We continuously explore cutting-edge technologies and smart systems to deliver cleaner, healthier, and more efficient hydration for modern living.',
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-900" />,
      title: 'Health Focus',
      description:
        'We don’t just purify water — we promote wellness. Every Enpure system is designed to enhance hydration, support body balance, and improve overall health, helping you and your loved ones thrive every day.',
    },
  ];

  const team = [
    {
      name: 'Pankaj Sheth',
      role: 'Founder & CEO',
      image: founder,
      description:
        'Innovator. Visionary. Builder of a brand shaping the future of clean, smart hydration.',
    },
    {
      name: 'Dimple Sheth',
      role: 'Director of Operations',
      image:
        'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Building the engine that keeps innovation flowing — flawlessly.',
    },
    {
      name: 'Jainam Sheth',
      role: 'Director of Marketing',
      image: directorMarketing,
      description: 'Turning bold ideas into brands people believe in and love to talk about.',
    },
    {
      name: 'Dharmesh Ganjawala',
      role: 'Head of Sales',
      image:
        'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300',
      description: 'Turning trust into traction — and connections into growth.',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 sm:py-20 relative flex items-center justify-center overflow-hidden -mt-20">
        <div className="container mx-auto px-4">
          <br/><br/>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6 text-center lg:text-left">
                About <span className="text-blue-900 italic">Enpure</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 text-justify">
                We believe that water is more than just a necessity — it’s the foundation of well-being.
                As India’s leading innovator in <strong>advanced water purification and ionization</strong>,
                Enpure is redefining what “pure” truly means.
              </p>
              <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-4 text-justify">
                Our mission is simple yet profound: to make <strong>clean, healthy, and mineral-balanced
                water</strong> accessible to every home — while caring for the planet that provides it.
                Built on <strong>science, design, and trust</strong>, Enpure blends modern engineering
                with nature-inspired balance to ensure every drop nourishes your body and elevates your lifestyle.
              </p>

              <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-4 text-justify">
              Established in <em>2017</em>, <strong>Enpure</strong> is a flagship brand by <strong><em>DiHydro Tech Innovation</em></strong>, dedicated to revolutionizing water purification and wellness in India. Specializing in alkaline ionizers, advanced RO systems, and hydrogen water generators, we merge modern science with health-focused innovation.
              </p>

              <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-4 text-justify">
              Enpure systems are designed not just to purify water, but to enrich it—delivering alkaline, mineral-balanced, and antioxidant-rich water that supports immunity, detoxification, and long-term well-being.
              </p>

              <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-4 text-justify">
              With nationwide reach and a growing community of satisfied customers, Enpure is committed to bringing <span className="text-blue-800 font-semibold italic">“wellness in every drop.”</span>
              </p>
                
              <p className="text-base sm:text-lg font-medium text-gray-700 italic text-center lg:text-left">
                  Because when water is pure, <span className="text-blue-900 font-semibold">life flows better.</span>
              </p>

            </div>

            <div className="flex justify-center">
              <img
                src={aboutEnpure}
                alt="Enpure water purifier"
                className="rounded-xl shadow-lg w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-4xl font-bold text-blue-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium text-sm sm:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <img
              src={ourStory}
              alt="Enpure manufacturing facility"
              className="rounded-lg shadow-lg w-full object-cover max-h-[450px] sm:max-h-[600px]"
            />
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-700 text-base sm:text-lg leading-relaxed text-justify">
                <p>
                  What started as a simple vision in <span className="font-semibold italic">2016</span> — to make pure,
                  healthy water accessible to every home — soon grew into something much larger.
                </p>
                <p>
                  <span className="font-semibold italic">Enpure International</span> was born as our first step toward
                  that vision — a brand dedicated to bringing premium, reliable, and innovative water purification
                  systems to life.
                </p>
                <p>
                  In <span className="font-semibold italic">2017</span>, we took the next big leap by forming{' '}
                  <span className="font-semibold italic">DiHydro Tech Innovations Pvt. Ltd.</span> — the parent company
                  that now powers Enpure’s growth, research, and technology.
                </p>
                <p className="italic">
                  Our journey continues — with a mission to redefine{' '}
                  <span className="font-semibold italic">purity, technology, innovation and trust.</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide us in delivering the best water purification solutions
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-2xl shadow-md">
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base text-justify">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Leadership Team</h2>
            <p className="text-gray-600">Meet the visionaries behind Enpure's success</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <div key={index} className="text-center bg-white rounded-2xl shadow-md p-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-28 h-28 sm:w-36 sm:h-36 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-900 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications & Awards</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
            <div className="text-center p-6 bg-white rounded-2xl shadow-md">
              <Award className="h-10 w-10 text-blue-900 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">ISO 9001:2015</h4>
              <p className="text-sm text-gray-600 mt-1">Quality Management</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-md">
              <Star className="h-10 w-10 text-blue-900 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">NSF Certified</h4>
              <p className="text-sm text-gray-600 mt-1">Product Safety</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-md">
              <CheckCircle className="h-10 w-10 text-blue-900 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">WQA Gold Seal</h4>
              <p className="text-sm text-gray-600 mt-1">Water Quality</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-md">
              <Award className="h-10 w-10 text-blue-900 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900">Best Brand 2023</h4>
              <p className="text-sm text-gray-600 mt-1">Water Purifiers</p>
            </div>
            <div className="text-center p-6 bg-white rounded-2xl shadow-md">
              <img src={makeInIndia} alt="Make in India" className="mx-auto h-12 mb-3" />
              <h4 className="font-semibold text-gray-900">Make in India</h4>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Join the Enpure Family</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto text-sm sm:text-base">
            Experience the difference that pure, alkaline water can make in your life. 
            Join thousands of satisfied customers who trust Enpure for their family's health.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="modern-button bg-blue-875 text-white px-12 py-4 rounded-2xl text-lg font-medium hover:bg-blue-875 flex items-center justify-center space-x-3 shadow-2xl"
            >
              Explore Products
            </a>
            <a
              href="/contact"
              className="modern-button bg-blue-875 text-white px-12 py-4 rounded-2xl text-lg font-medium hover:bg-blue-875 flex items-center justify-center space-x-3 shadow-2xl"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
