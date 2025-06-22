import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Briefcase, Users, Megaphone, ChevronDown, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    setFormSubmitted(true);
  };

  const offices = [
    {
      city: "Warsaw",
      country: "Poland",
      address: "ul. Grzybowska 80/82, 00-844 Warsaw",
      phone: "+48 22 123 4567",
      email: "warsaw@freekiwebsite.com",
      hours: "9 AM - 5 PM CET",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.953581566351!2d21.0117846157965!3d52.22967567976059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc8c0a2a8d5d%3A0x6b44f2b3e8e7a0a!2sfreekiwebsite%20Warsaw!5e0!3m2!1sen!2spl!4v1628587399999!5m2!1sen!2spl",
    },
    {
      city: "Poznań",
      country: "Poland",
      address: "ul. Grunwaldzka 182, 60-166 Poznań",
      phone: "+48 61 123 4567",
      email: "poznan@freekiwebsite.com",
      hours: "9 AM - 5 PM CET",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.953581566351!2d17.0385375157965!3d51.10788527957164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9c4b793d5d7%3A0x8f7f8f6f6f6f6f6f!2sfreekiwebsite%20Poznan!5e0!3m2!1sen!2spl!4v1628587499999!5m2!1sen!2spl",
    },
    {
      city: "Wrocław",
      country: "Poland",
      address: "ul. Św. Antoniego 2/4, 50-073 Wrocław",
      phone: "+48 71 123 4567",
      email: "wroclaw@freekiwebsite.com",
      hours: "9 AM - 5 PM CET",
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2443.953581566351!2d17.0385375157965!3d51.10788527957164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9c4b793d5d7%3A0x8f7f8f6f6f6f6f6f!2sfreekiwebsite%20Wroclaw!5e0!3m2!1sen!2spl!4v1628587599999!5m2!1sen!2spl",
    }
  ];

  const contactMethods = [
    {
      icon: <Briefcase className="w-8 h-8 text-white"/>,
      title: "Business Inquiries",
      description: "Let's talk about your project and how we can help you grow.",
      contact: "hello@freekiwebsite.com",
      link: "mailto:hello@freekiwebsite.com",
    },
    {
      icon: <Users className="w-8 h-8 text-white"/>,
      title: "Careers",
      description: "Join our team of talented professionals and shape the future of technology.",
      contact: "careers@freekiwebsite.com",
      link: "mailto:careers@freekiwebsite.com"
    },
    {
      icon: <Megaphone className="w-8 h-8 text-white"/>,
      title: "Media & Press",
      description: "For all media inquiries, please get in touch with our communications team.",
      contact: "press@freekiwebsite.com",
      link: "mailto:press@freekiwebsite.com",
    }
  ];

  const faqs = [
    {
      question: "What kind of services do you offer?",
      answer: "We offer a wide range of services including web development, mobile app development, product design, and digital consulting. We work with companies of all sizes, from startups to large enterprises."
    },
    {
      question: "How does the project process work at freekiwebsite?",
      answer: "Our process is collaborative and transparent. We start with a discovery phase to understand your needs, followed by design, development, and testing. We use agile methodologies to ensure we deliver value quickly and efficiently."
    },
    {
      question: "What technologies do you specialize in?",
      answer: "We are technology-agnostic but have deep expertise in modern frameworks like React, Node.js, and Python. We choose the best tools for the job to ensure your project is scalable, secure, and high-performing."
    },
    {
      question: "How much does it cost to work with you?",
      answer: "The cost depends on the project scope and complexity. We offer flexible engagement models, including fixed-price projects and dedicated teams. Contact us for a detailed proposal."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-black to-gray-900 section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              We're here to help. Reach out to us for any business inquiries, career opportunities, or media requests.
            </p>
          </div>
          
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center p-8 bg-gray-900 rounded-xl border border-gray-800">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  {method.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{method.title}</h3>
                <p className="text-gray-400 mb-4">{method.description}</p>
                <p className="text-lg font-semibold text-white mb-4">{method.contact}</p>
                <a href={method.link} className="btn-primary inline-flex items-center space-x-2">
                  <span>Send an Email</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section-padding bg-black">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h2>
            <p className="text-xl text-gray-300">
              Fill out the form below and we'll get back to you as soon as possible.
            </p>
          </div>
          
          {formSubmitted ? (
            <div className="mt-12 text-center bg-gray-900 p-8 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-4">Thank you!</h3>
              <p className="text-gray-300 mb-6">Your message has been sent successfully. We will be in touch shortly.</p>
              <button 
                onClick={() => setFormSubmitted(false)} 
                className="btn-primary"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-12 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-semibold text-gray-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-gray-900 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-300 mb-2">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-gray-900 text-white"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-300 mb-2">Company Name</label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-gray-900 text-white"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-300 mb-2">Phone Number (Optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-gray-900 text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-300 mb-2">How can we help you?</label>
                <select 
                  id="service" 
                  name="service"
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-gray-900 text-white"
                >
                  <option>Select a service</option>
                  <option>AI Solutions</option>
                  <option>Design</option>
                  <option>Web Development</option>
                  <option>Mobile Development</option>
                  <option>Product Management</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-gray-300 mb-2">What is your estimated budget?</label>
                <select 
                  id="budget" 
                  name="budget"
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent bg-gray-900 text-white"
                >
                  <option>Select a budget range</option>
                  <option>$25k - $50k</option>
                  <option>$50k - $100k</option>
                  <option>$100k - $200k</option>
                  <option>$200k+</option>
                  <option>Not sure yet</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-300 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 border border-gray-700 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent resize-none bg-gray-900 text-white"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="btn-primary text-lg px-8 py-4"
                >
                  Send Message
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Offices Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Offices</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-black p-8 rounded-xl border border-gray-800">
                <h3 className="text-xl font-bold text-white mb-2">{office.city}</h3>
                <p className="text-gray-400 mb-6">{office.country}</p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-white mt-1" />
                    <p className="text-gray-300">{office.address}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-white" />
                    <p className="text-gray-300">{office.phone}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-white" />
                    <p className="text-gray-300">{office.email}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-white" />
                    <p className="text-gray-300">{office.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-black">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="bg-gray-900 p-6 rounded-lg border border-gray-800">
                <summary className="font-semibold text-lg cursor-pointer flex justify-between items-center text-white">
                  {faq.question}
                  <ChevronDown className="w-5 h-5 transition-transform duration-300 transform group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-gray-300">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="section-padding bg-gradient-to-r from-black to-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Have a project in mind? <span className="text-yellow-400">Let's talk.</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            We're always excited to hear about new ideas.
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/contact" className="btn-primary text-lg px-8 py-4">
              Get a Free Consultation
            </Link>
            <Link to="/services" className="btn-secondary bg-white text-black hover:bg-gray-100 text-lg px-8 py-4">
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 