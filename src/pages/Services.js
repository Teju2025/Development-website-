import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Palette, Brain, Settings, Users, Lightbulb } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "Ideation",
      description: "Identify, shape and validate your product idea",
      features: [
        "Product strategy and roadmap",
        "Market research and validation",
        "MVP definition and planning",
        "Business model canvas",
        "User research and personas"
      ],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Bring products to life with world-class engineering",
      features: [
        "Web and mobile development",
        "Cloud infrastructure",
        "API development and integration",
        "DevOps and CI/CD",
        "Quality assurance and testing"
      ],
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
    },
    {
      icon: Palette,
      title: "Design",
      description: "Craft beautiful digital experiences across platforms",
      features: [
        "UI/UX design",
        "Design systems",
        "Prototyping and wireframing",
        "User research and testing",
        "Brand identity design"
      ],
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop"
    },
    {
      icon: Brain,
      title: "Generative AI and Data",
      description: "Leverage AI to transform your business processes",
      features: [
        "AI strategy and implementation",
        "Machine learning models",
        "Data analytics and insights",
        "Natural language processing",
        "Computer vision solutions"
      ],
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop"
    },
    {
      icon: Settings,
      title: "Maintenance",
      description: "Safeguard your product's quality and reliability",
      features: [
        "Application monitoring",
        "Performance optimization",
        "Security updates",
        "Bug fixes and support",
        "Infrastructure management"
      ],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop"
    },
    {
      icon: Users,
      title: "Cooperation Models",
      description: "Choose the collaboration model that fits your needs",
      features: [
        "Dedicated teams",
        "Project-based development",
        "Staff augmentation",
        "Technical consulting",
        "Agile development"
      ],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
    }
  ];

  const caseStudies = [
    {
      title: "AI-powered content creation for education",
      company: "EdTech Startup",
      result: "99% faster content creation",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop"
    },
    {
      title: "Mobile app redesign for real estate",
      company: "Keller Williams",
      result: "60% more user engagement",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
    },
    {
      title: "R&D process automation",
      company: "Merck",
      result: "From 6 months to 6 hours",
      image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-netguru-light to-white section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-netguru-dark mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-netguru-gray mb-8">
              From ideation to maintenance, we provide end-to-end digital product development services to help you succeed in the digital age.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-6">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                  <div className="absolute top-4 left-4">
                    <div className="w-12 h-12 bg-netguru-blue rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-netguru-dark group-hover:text-netguru-blue transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-lg text-netguru-gray">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-netguru-gray">
                        <div className="w-2 h-2 bg-netguru-blue rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`}
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

      {/* Process Section */}
      <section className="section-padding bg-netguru-light">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-netguru-dark mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-netguru-gray max-w-3xl mx-auto">
              We follow a proven methodology that ensures successful delivery of your digital products.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {[
              { number: "01", title: "Discovery", desc: "Understand your needs and objectives" },
              { number: "02", title: "Planning", desc: "Define scope, timeline, and deliverables" },
              { number: "03", title: "Design", desc: "Create user-centered design solutions" },
              { number: "04", title: "Development", desc: "Build your product with best practices" },
              { number: "05", title: "Launch", desc: "Deploy and maintain your solution" }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-netguru-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-xl">{step.number}</span>
                </div>
                <h3 className="text-xl font-bold text-netguru-dark mb-2">{step.title}</h3>
                <p className="text-netguru-gray">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-netguru-dark mb-6">
              Success <span className="gradient-text">Stories</span>
            </h2>
            <p className="text-xl text-netguru-gray max-w-3xl mx-auto">
              See how our services have helped clients achieve remarkable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-xl mb-4">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-300"></div>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-netguru-blue font-semibold">{study.company}</p>
                  <h3 className="text-xl font-bold text-netguru-dark group-hover:text-netguru-blue transition-colors">
                    {study.title}
                  </h3>
                  <p className="text-netguru-gray font-semibold">{study.result}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/clients" className="btn-secondary inline-flex items-center space-x-2">
              <span>View all case studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-netguru-blue to-blue-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to start your <span className="text-yellow-300">project</span>?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Let's discuss how our services can help you achieve your digital goals.
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-netguru-blue hover:bg-gray-100 text-lg px-8 py-4">
            Get in touch
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services; 