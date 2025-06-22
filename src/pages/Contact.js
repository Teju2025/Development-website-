import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    projectType: '',
    budget: '',
    timeline: '',
    description: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      phone: '',
      projectType: '',
      budget: '',
      timeline: '',
      description: ''
    });
  };

  const offices = [
    {
      city: "Warsaw",
      country: "Poland",
      address: "ul. Grzybowska 80/82, 00-844 Warsaw",
      phone: "+48 22 123 4567",
      email: "warsaw@netguru.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM CET"
    },
    {
      city: "Poznań",
      country: "Poland",
      address: "ul. Grunwaldzka 182, 60-166 Poznań",
      phone: "+48 61 123 4567",
      email: "poznan@netguru.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM CET"
    },
    {
      city: "Wrocław",
      country: "Poland",
      address: "ul. Św. Antoniego 2/4, 50-073 Wrocław",
      phone: "+48 71 123 4567",
      email: "wroclaw@netguru.com",
      hours: "Mon-Fri: 9:00 AM - 6:00 PM CET"
    }
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email us",
      description: "Get in touch via email",
      contact: "hello@netguru.com",
      action: "Send email"
    },
    {
      icon: Phone,
      title: "Call us",
      description: "Speak with our team",
      contact: "+48 22 123 4567",
      action: "Call now"
    },
    {
      icon: MapPin,
      title: "Visit us",
      description: "Meet us in person",
      contact: "Warsaw, Poland",
      action: "Get directions"
    }
  ];

  const projectTypes = [
    "Web Application",
    "Mobile Application",
    "AI/ML Solution",
    "Design Project",
    "Consulting",
    "Team Extension",
    "Other"
  ];

  const budgetRanges = [
    "$10k - $50k",
    "$50k - $100k",
    "$100k - $250k",
    "$250k - $500k",
    "$500k+",
    "Not sure yet"
  ];

  const timelines = [
    "1-3 months",
    "3-6 months",
    "6-12 months",
    "12+ months",
    "Not sure yet"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-netguru-light to-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-netguru-dark mb-6">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-netguru-gray mb-8">
              Ready to start your project? Let's discuss how we can help you achieve your digital goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center p-8 bg-netguru-light rounded-xl">
                <div className="w-16 h-16 bg-netguru-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <method.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-netguru-dark mb-2">{method.title}</h3>
                <p className="text-netguru-gray mb-4">{method.description}</p>
                <p className="text-lg font-semibold text-netguru-blue mb-4">{method.contact}</p>
                <button className="btn-primary">
                  {method.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="section-padding bg-netguru-light">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-netguru-dark mb-6">
                Start Your <span className="gradient-text">Project</span>
              </h2>
              <p className="text-xl text-netguru-gray">
                Tell us about your project and we'll get back to you within 24 hours.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-white p-12 rounded-xl text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-netguru-dark mb-4">Thank you!</h3>
                <p className="text-netguru-gray mb-6">
                  We've received your message and will get back to you within 24 hours.
                </p>
                <button 
                  onClick={() => setIsSubmitted(false)}
                  className="btn-primary"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-netguru-dark mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-netguru-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-netguru-dark mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-netguru-blue focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-netguru-dark mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-netguru-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-netguru-dark mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-netguru-blue focus:border-transparent"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-netguru-dark mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-netguru-blue focus:border-transparent"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-netguru-dark mb-2">
                      Project Type *
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-netguru-blue focus:border-transparent"
                    >
                      <option value="">Select project type</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-semibold text-netguru-dark mb-2">
                      Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-netguru-blue focus:border-transparent"
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>{range}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-netguru-dark mb-2">
                      Timeline
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-netguru-blue focus:border-transparent"
                    >
                      <option value="">Select timeline</option>
                      {timelines.map((time, index) => (
                        <option key={index} value={time}>{time}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-semibold text-netguru-dark mb-2">
                    Project Description *
                  </label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    placeholder="Tell us about your project, goals, and requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-netguru-blue focus:border-transparent resize-none"
                  ></textarea>
                </div>

                <div className="text-center">
                  <button type="submit" className="btn-primary text-lg px-8 py-4 inline-flex items-center space-x-2">
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-netguru-dark mb-6">
              Our <span className="gradient-text">Offices</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <div key={index} className="bg-netguru-light p-8 rounded-xl">
                <h3 className="text-xl font-bold text-netguru-dark mb-2">{office.city}</h3>
                <p className="text-netguru-gray mb-6">{office.country}</p>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-netguru-blue mt-1" />
                    <p className="text-netguru-gray">{office.address}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-netguru-blue" />
                    <p className="text-netguru-gray">{office.phone}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-netguru-blue" />
                    <p className="text-netguru-gray">{office.email}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-netguru-blue" />
                    <p className="text-netguru-gray">{office.hours}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-netguru-blue to-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-yellow-300">collaborate</span>?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss your project and explore how we can help you achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-secondary bg-white text-netguru-blue hover:bg-gray-100 text-lg px-8 py-4">
              Schedule a call
            </button>
            <button className="btn-secondary bg-white text-netguru-blue hover:bg-gray-100 text-lg px-8 py-4">
              Download our portfolio
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact; 