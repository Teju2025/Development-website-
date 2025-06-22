import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, ShoppingCart, Heart, GraduationCap, Home, Leaf } from 'lucide-react';

const Industries = () => {
  const industries = [
    {
      icon: TrendingUp,
      title: "Finance",
      description: "Digital transformation for financial services",
      features: [
        "Fintech solutions",
        "Payment systems",
        "Risk management",
        "Compliance automation",
        "Customer experience"
      ],
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      caseStudy: {
        title: "Mobile app MVP in 5 weeks for a New York fintech",
        result: "New version of a financial predictions app"
      }
    },
    {
      icon: ShoppingCart,
      title: "Commerce",
      description: "E-commerce and retail digital solutions",
      features: [
        "E-commerce platforms",
        "Marketplace solutions",
        "Inventory management",
        "Customer analytics",
        "Mobile commerce"
      ],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      caseStudy: {
        title: "E-commerce platform optimization",
        result: "77% faster page speed for a meal delivery app"
      }
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Digital health and medical technology",
      features: [
        "Telemedicine platforms",
        "Health monitoring apps",
        "Medical device software",
        "Patient management systems",
        "Healthcare analytics"
      ],
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
      caseStudy: {
        title: "Healthcare data management system",
        result: "Streamlined patient care processes"
      }
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "EdTech and learning platforms",
      features: [
        "Learning management systems",
        "Educational apps",
        "Content creation tools",
        "Student analytics",
        "Virtual classrooms"
      ],
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      caseStudy: {
        title: "AI-powered content creation for education",
        result: "99% faster teacher guide creation process"
      }
    },
    {
      icon: Home,
      title: "Proptech",
      description: "Real estate technology solutions",
      features: [
        "Property management platforms",
        "Real estate marketplaces",
        "Virtual tours",
        "Property analytics",
        "Tenant portals"
      ],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
      caseStudy: {
        title: "60% more user engagement with hyper-personalization",
        result: "AI PoC for hyper-localizing real estate content"
      }
    },
    {
      icon: Leaf,
      title: "Greentech",
      description: "Sustainable technology solutions",
      features: [
        "Energy management systems",
        "Sustainability tracking",
        "Carbon footprint apps",
        "Renewable energy platforms",
        "Environmental monitoring"
      ],
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
      caseStudy: {
        title: "Sustainability tracking platform",
        result: "Environmental impact monitoring system"
      }
    }
  ];

  const stats = [
    { value: "500+", label: "Projects delivered across industries" },
    { value: "50+", label: "Fortune 500 companies served" },
    { value: "15+", label: "Years of industry experience" },
    { value: "95%", label: "Client satisfaction rate" }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CTO",
      company: "FinTech Startup",
      quote: "Netguru's expertise in financial technology helped us launch our product ahead of schedule.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Head of Digital",
      company: "Retail Chain",
      quote: "Their e-commerce solutions transformed our online presence and boosted sales significantly.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Dr. Emily Rodriguez",
      role: "Medical Director",
      company: "Healthcare Network",
      quote: "The telemedicine platform they built improved patient care and operational efficiency.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-netguru-light to-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-netguru-dark mb-6">
              Industry <span className="gradient-text">Expertise</span>
            </h1>
            <p className="text-xl md:text-2xl text-netguru-gray mb-8">
              We have deep experience across multiple industries, understanding the unique challenges and opportunities each sector presents.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-netguru-dark text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-netguru-blue mb-2">
                  {stat.value}
                </div>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {industries.map((industry, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={industry.image}
                    alt={industry.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-netguru-blue rounded-lg flex items-center justify-center">
                      <industry.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-netguru-dark group-hover:text-netguru-blue transition-colors">
                    {industry.title}
                  </h3>
                  <p className="text-lg text-netguru-gray">
                    {industry.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {industry.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-netguru-gray">
                        <div className="w-2 h-2 bg-netguru-blue rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="bg-netguru-light p-4 rounded-lg">
                    <p className="text-sm text-netguru-blue font-semibold mb-1">Case Study</p>
                    <h4 className="font-semibold text-netguru-dark mb-1">{industry.caseStudy.title}</h4>
                    <p className="text-sm text-netguru-gray">{industry.caseStudy.result}</p>
                  </div>
                  
                  <Link 
                    to={`/industries/${industry.title.toLowerCase()}`}
                    className="inline-flex items-center text-netguru-blue hover:text-blue-600 font-semibold group/link"
                  >
                    Learn more
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section-padding bg-netguru-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-netguru-dark mb-6">
              What our <span className="gradient-text">clients say</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-netguru-dark">{testimonial.name}</h4>
                    <p className="text-sm text-netguru-gray">{testimonial.role}</p>
                    <p className="text-sm font-semibold text-netguru-blue">{testimonial.company}</p>
                  </div>
                </div>
                <p className="text-netguru-dark italic">"{testimonial.quote}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-netguru-blue to-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to transform your <span className="text-yellow-300">industry</span>?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our industry expertise can help you stay ahead of the competition.
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-netguru-blue hover:bg-gray-100 text-lg px-8 py-4">
            Start a conversation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Industries; 