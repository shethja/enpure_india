import React, { useState } from 'react';
import { Calendar, Clock, MapPin, CheckCircle, Phone, Wrench, Shield, Users } from 'lucide-react';
import emailjs from 'emailjs-com';

const Installation = () => {
  const [bookingData, setBookingData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    productType: '',
    bookingType: '',
    preferredDate: '',
    preferredTime: '',
    additionalNotes: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

/*
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setBookingData({
        name: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        pincode: '',
        productType: '',
        bookingType: '',
        preferredDate: '',
        preferredTime: '',
        additionalNotes: ''
      });
    }, 5000);
  };
*/

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_ib7r5vj', // replace with your EmailJS Service ID
        'template_hhexg7m', // replace with your EmailJS Template ID
        {
          name: bookingData.name,
          email: bookingData.email,
          phone: bookingData.phone,
          address: bookingData.address,
          city: bookingData.city,
          pincode: bookingData.pincode,
          productType: bookingData.productType,
          bookingType: bookingData.bookingType,
          preferredDate: bookingData.preferredDate,
          preferredTime: bookingData.preferredTime,
          additionalNotes: bookingData.additionalNotes
        },
        'xkyJ1mI3UhDDxhFEr' // replace with your EmailJS Public Key
      );

      setIsSubmitting(false);
      setIsSubmitted(true);

      // Reset form after a short delay
      setTimeout(() => {
        setIsSubmitted(false);
        setBookingData({
                  name: '',
        phone: '',
        email: '',
        address: '',
        city: '',
        pincode: '',
        productType: '',
        bookingType: '',
        preferredDate: '',
        preferredTime: '',
        additionalNotes: ''
        });
      }, 5000);
    } catch (error) {
      console.error('Email sending failed:', error);
      setIsSubmitting(false);
      alert('Failed to send message. Please try again later.');
    }
  };

  const services = [
    {
      icon: <Wrench className="h-8 w-8 text-blue-800" />,
      title: 'Professional Installation',
      description: 'Expert installation by certified technicians with 5+ years experience'
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-800" />,
      title: 'Quality Assurance',
      description: 'Complete testing and quality checks before handover to ensure optimal performance'
    },
    {
      icon: <Users className="h-8 w-8 text-blue-800" />,
      title: 'Free Training',
      description: 'Comprehensive training on product usage, maintenance, and troubleshooting'
    },
    {
      icon: <Phone className="h-8 w-8 text-blue-800" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support for any installation-related queries'
    }
  ];

  const process = [
    {
      step: '1',
      title: 'Book Appointment',
      description: 'Schedule your preferred date and time slot online or by calling us'
    },
    {
      step: '2',
      title: 'Pre-Installation Survey',
      description: 'Our technician visits to assess water quality and installation requirements'
    },
    {
      step: '3',
      title: 'Professional Installation',
      description: 'Complete installation with proper plumbing and electrical connections'
    },
    {
      step: '4',
      title: 'Testing & Handover',
      description: 'Thorough testing, demonstration, and product handover with documentation'
    }
  ];

  const timeSlots = [
    { value: '9am-12pm', label: '9:00 AM - 12:00 PM' },
    { value: '12pm-3pm', label: '12:00 PM - 3:00 PM' },
    { value: '3pm-6pm', label: '3:00 PM - 6:00 PM' }
  ];

  const bookingType = [
    { value: 'Installation', label: 'Installation' },
    { value: 'Live In-Person Demo', label: 'Live In-Person Demo' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 relative min-h-screen flex items-center justify-center overflow-hidden -mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Professional Installation Services
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Get your Water Purifier Installed by Certified Professionals. Free Installation, 
              Comprehensive Training, and Ongoing Support included with Every Purchase.
            </p>
            <br/><br/>
            <div className="flex flex-col sm:flex-row gap-10 justify-center">
              <a
                href="#booking"
                className="modern-button glass-card bg-blue-875 text-black py-4 px-6 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg font-medium"
              >
                Book Installation / Book a Live In-Person Demo
              </a>
              <a
                href="tel:+917016038671"
                className="modern-button glass-card bg-blue-875 text-black py-4 px-6 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg font-medium"
              >
                Call Now for a Live Video Call Demo
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Installation Service?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional Installation ensures Optimal Performance and Longevity of your Water Purification System
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="text-center p-6">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Installation Process
            </h2>
            <p className="text-lg text-gray-600">
              Simple 4-Step Process to Get your Water Purifier Up and Running
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-900 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="booking" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Book Your Installation / Book Your Live In-Person Demo 
              </h2>
              <p className="text-lg text-gray-600">
                Schedule Your Free Professional Installation at Your Convenience
              </p>
            </div>

            <div className="lg:grid lg:grid-cols-2 lg:gap-12">
              {/* Booking Form */}
              <div className="mb-12 lg:mb-0">
                <div className="bg-gray-50 rounded-lg p-8">
                  {isSubmitted ? (
                    <div className="text-center py-8">
                      <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Installation Booked Successfully!
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Thank you for booking with us. We'll contact you within 2 hours to confirm your appointment.
                      </p>
                      <div className="bg-white p-4 rounded-lg">
                        <p className="text-sm text-gray-600">
                          <strong>Booking ID:</strong> INS-{Date.now()}<br />
                          <strong>Date:</strong> {bookingData.preferredDate}<br />
                          <strong>Time:</strong> {bookingData.preferredTime}
                        </p>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            value={bookingData.name}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number *
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            required
                            value={bookingData.phone}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={bookingData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        />
                      </div>

                      <div>
                        <label htmlFor="bookingType" className="block text-sm font-medium text-gray-700 mb-1">
                          Booking Type *
                        </label>
                        <select
                          id="bookingType"
                          name="bookingType"
                          required
                          value={bookingData.bookingType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        >
                          
                          <option value="">Select Product Type</option>
                            {bookingType.map(booking => (
                              <option key={booking.value} value={booking.value}>
                                {booking.label}
                              </option>
                            ))}

                        </select>
                      </div>

                      <div>
                        <label htmlFor="productType" className="block text-sm font-medium text-gray-700 mb-1">
                          Product Type *
                        </label>
                        <select
                          id="productType"
                          name="productType"
                          required
                          value={bookingData.productType}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        >
                          <option value="">Select Product Type</option>
                          <option value="RO-UV-UF-Alkaline Water Purifiers">RO+UV+UF+Alkaline Purifier</option>
                          <option value="Alkaline-Ionizers">Alkaline Ionizer</option>
                          <option value="Commercial">Commercial System</option>
                        </select>
                      </div>

                      <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                          Installation Address *
                        </label>
                        <textarea
                          id="address"
                          name="address"
                          required
                          rows={3}
                          value={bookingData.address}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                            City *
                          </label>
                          <input
                            type="text"
                            id="city"
                            name="city"
                            required
                            value={bookingData.city}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label htmlFor="pincode" className="block text-sm font-medium text-gray-700 mb-1">
                            Pincode *
                          </label>
                          <input
                            type="text"
                            id="pincode"
                            name="pincode"
                            required
                            value={bookingData.pincode}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1">
                            Preferred Date *
                          </label>
                          <input
                            type="date"
                            id="preferredDate"
                            name="preferredDate"
                            required
                            value={bookingData.preferredDate}
                            onChange={handleInputChange}
                            min={new Date().toISOString().split('T')[0]}
                            className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          />
                        </div>
                        <div>
                          <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1">
                            Preferred Time Slot *
                          </label>
                          <select
                            id="preferredTime"
                            name="preferredTime"
                            required
                            value={bookingData.preferredTime}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                          >
                            <option value="">Select Time Slot</option>
                            {timeSlots.map(slot => (
                              <option key={slot.value} value={slot.value}>
                                {slot.label}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div>
                        <label htmlFor="additionalNotes" className="block text-sm font-medium text-gray-700 mb-1">
                          Additional Notes (Optional)
                        </label>
                        <textarea
                          id="additionalNotes"
                          name="additionalNotes"
                          rows={3}
                          value={bookingData.additionalNotes}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-3xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none transition-all duration-200"
                          placeholder="Any specific requirements or instructions for the installation team..."
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="modern-button glass-card w-full bg-blue-875 text-black py-4 px-6 rounded-full hover:bg-blue-950 hover:text-white transition-all duration-300 flex items-center justify-center space-x-3 hover:scale-105 shadow-lg font-medium"
                      >
                        {isSubmitting ? (
                          <span>Booking...</span>
                        ) : (
                          <>
                            <Calendar className="h-4 w-4" />
                            <span>Book</span>
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>

              {/* Information Sidebar */}
              <div>
                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-4">
                      What's Included?
                    </h3>
                    <ul className="space-y-2 text-blue-800">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 flex-shrink-0" />
                        <span>Free Professional Installation</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 flex-shrink-0" />
                        <span>Water Quality Testing</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 flex-shrink-0" />
                        <span>Complete System Setup</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 flex-shrink-0" />
                        <span>Product Demonstration</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 flex-shrink-0" />
                        <span>Maintenance Training</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      Installation Time
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-700">Standard: 2-3 hours</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="h-4 w-4 text-gray-600" />
                        <span className="text-gray-700">Complex setup: 3-4 hours</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-green-900 mb-4">
                      Service Areas
                    </h3>
                    <div className="space-y-2 text-green-800">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span>Delhi NCR & surrounding areas</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span>Mumbai & Pune metro areas</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span>Bangalore & Hyderabad</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4 flex-shrink-0" />
                        <span>Chennai & Coimbatore</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-yellow-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-2">
                      Need Help?
                    </h3>
                    <p className="text-yellow-800 text-sm mb-3">
                      Call our Installation Support Team for Assistance
                    </p>
                    <a
                      href="tel:+911800123456"
                      className="inline-flex items-center space-x-2 text-yellow-900 font-medium"
                    >
                      <Phone className="h-4 w-4" />
                      <span>+91 70160 38671</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Installation;