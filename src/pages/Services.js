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
      <section className="bg-gradient-to-br from-gray-900 to-black section-padding">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              We provide end-to-end digital product development services to help you scale, innovate, and get ahead of the competition.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div key={service.title} className="group cursor-pointer bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-800">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-black rounded-lg flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <ArrowRight className="w-6 h-6 text-gray-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.slice(0, 2).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-white rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="p-6 bg-black">
                  <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`} className="font-semibold text-white hover:text-gray-300 transition-colors inline-flex items-center space-x-2">
                    <span>Explore {service.title}</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="section-padding bg-gray-900">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our agile and collaborative process ensures we deliver high-quality digital products on time and within budget.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-8 w-1 bg-gray-700 h-full"></div>
            
            <div className="space-y-16 lg:space-y-0">
              {[
                { phase: "Discovery", title: "Understand your needs and objectives", desc: "We start by understanding your business goals and objectives." },
                { phase: "Planning", title: "Define scope, timeline, and deliverables", desc: "We work with you to define the project scope, timeline, and deliverables." },
                { phase: "Design", title: "Create user-centered design solutions", desc: "We design solutions that are user-centered and meet your business needs." },
                { phase: "Development", title: "Build your product with best practices", desc: "We build your product using the latest technologies and best practices." },
                { phase: "Launch", title: "Deploy and maintain your solution", desc: "We deploy and maintain your solution to ensure it meets your business needs." }
              ].map((step, index) => (
                <div key={index} className="flex flex-col lg:flex-row items-center gap-8">
                  <div className={`lg:w-1/2 ${index % 2 !== 0 ? 'lg:order-2 lg:text-left' : 'lg:text-right'}`}>
                    <div className="lg:inline-block lg:max-w-md">
                      <span className="text-sm font-semibold text-yellow-400 mb-2 block">{step.phase}</span>
                      <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                      <p className="text-gray-300">{step.desc}</p>
                    </div>
                  </div>
                  <div className="relative lg:w-auto">
                    <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4 lg:mb-0 z-10 relative border-4 border-gray-900">
                      {index % 2 === 0 ? <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div> : null}
                    </div>
                  </div>
                  <div className={`lg:w-1/2 ${index % 2 !== 0 ? 'lg:order-1' : ''}`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="section-padding bg-black">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">Work</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Check out some of our recent projects to see the tangible results we've delivered for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <div key={study.company} className="group cursor-pointer bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-800">
                <div className="relative overflow-hidden">
                  <img src={study.image} alt={study.title} className="w-full h-56 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-30"></div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-yellow-400 font-semibold mb-2">{study.company}</p>
                  <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors mb-3">
                    {study.title}
                  </h3>
                  <p className="text-4xl font-bold text-white mb-1">{study.result}</p>
                  <p className="text-gray-400">{study.resultDesc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/clients" className="btn-primary text-lg px-8 py-4">
              Explore more case studies
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-gray-900 to-black text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's build something <span className="text-yellow-400">amazing</span> together
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Ready to discuss your project? Get in touch with our experts for a free consultation.
          </p>
          <Link to="/contact" className="btn-secondary bg-white text-black hover:bg-gray-100 text-lg px-8 py-4">
            Start a project
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services; 