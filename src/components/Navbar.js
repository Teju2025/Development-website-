import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const servicesItems = [
    { name: 'Ideation', href: '/services/ideation' },
    { name: 'Software Development', href: '/services/development' },
    { name: 'Design', href: '/services/design' },
    { name: 'Generative AI and Data', href: '/services/ai' },
    { name: 'Maintenance', href: '/services/maintenance' },
    { name: 'Cooperation Models', href: '/services/cooperation' },
  ];

  const industriesItems = [
    { name: 'Finance', href: '/industries/finance' },
    { name: 'Commerce', href: '/industries/commerce' },
    { name: 'Healthcare', href: '/industries/healthcare' },
    { name: 'Education', href: '/industries/education' },
    { name: 'Proptech', href: '/industries/proptech' },
    { name: 'Greentech', href: '/industries/greentech' },
  ];

  const clientsItems = [
    { name: 'Case studies', href: '/clients/case-studies' },
    { name: 'Other projects', href: '/clients/projects' },
  ];

  const aboutItems = [
    { name: 'How we work', href: '/about/how-we-work' },
    { name: 'Sustainability', href: '/about/sustainability' },
    { name: 'Working at Netguru', href: '/about/careers' },
    { name: 'Job opportunities', href: '/about/jobs' },
    { name: 'Contact us', href: '/contact' },
    { name: 'Press Office', href: '/about/press' },
    { name: 'Refer Netguru', href: '/about/refer' },
  ];

  const insightsItems = [
    { name: 'Blog', href: '/insights/blog' },
    { name: 'Newsletters and originals', href: '/insights/newsletters' },
  ];

  return (
    <nav className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span className="text-black font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-bold text-white">Netguru</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('services')}
                className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
              >
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'services' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black border border-gray-800 shadow-xl rounded-lg py-2 z-50">
                  {servicesItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('industries')}
                className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
              >
                <span>Industries</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'industries' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black border border-gray-800 shadow-xl rounded-lg py-2 z-50">
                  {industriesItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Clients Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('clients')}
                className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
              >
                <span>Clients</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'clients' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black border border-gray-800 shadow-xl rounded-lg py-2 z-50">
                  {clientsItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('about')}
                className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
              >
                <span>About us</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'about' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black border border-gray-800 shadow-xl rounded-lg py-2 z-50">
                  {aboutItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Insights Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('insights')}
                className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors"
              >
                <span>Insights</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'insights' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-black border border-gray-800 shadow-xl rounded-lg py-2 z-50">
                  {insightsItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-900"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* CTA Button */}
            <Link to="/contact" className="btn-primary">
              Get in touch
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-gray-300"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                to="/services"
                className="block px-3 py-2 text-white hover:bg-gray-900"
              >
                Services
              </Link>
              <Link
                to="/industries"
                className="block px-3 py-2 text-white hover:bg-gray-900"
              >
                Industries
              </Link>
              <Link
                to="/clients"
                className="block px-3 py-2 text-white hover:bg-gray-900"
              >
                Clients
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 text-white hover:bg-gray-900"
              >
                About us
              </Link>
              <Link
                to="/insights"
                className="block px-3 py-2 text-white hover:bg-gray-900"
              >
                Insights
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 text-white hover:bg-gray-900"
              >
                Get in touch
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 