import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownTimeoutRef = useRef(null);

  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const controlNavbar = () => {
      const scrollThreshold = window.innerHeight * 0.1; // 10% of viewport height

      if (window.scrollY > scrollThreshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (isOpen) {
        setShowNav(true);
        return;
      }
      
      if (window.scrollY > lastScrollY && window.scrollY > scrollThreshold) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }

      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => {
      window.removeEventListener('scroll', controlNavbar);
    };
  }, [lastScrollY, isOpen]);

  const handleLogoClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // On other pages, the Link component will handle navigation,
    // and the ScrollToTop component will scroll to the top.
  };

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMouseEnter = (dropdown) => {
    clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(dropdown);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200); // 200ms delay
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
    { name: 'Working at FreekiWebsite', href: '/about/careers' },
    { name: 'Job opportunities', href: '/about/jobs' },
    { name: 'Contact us', href: '/contact' },
    { name: 'Press Office', href: '/about/press' },
    { name: 'Refer FreekiWebsite', href: '/about/refer' },
  ];

  const insightsItems = [
    { name: 'Blog', href: '/insights/blog' },
    { name: 'Newsletters and originals', href: '/insights/newsletters' },
  ];

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${(isScrolled || isOpen) ? 'bg-black shadow-lg' : 'bg-transparent'} ${showNav ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="container-custom">
        <div className="flex items-center h-16">
          {/* Left: Logo */}
          <div className="flex-1 flex items-center justify-start">
            <Link to="/" className="flex items-center space-x-2" onClick={handleLogoClick}>
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="font-logo text-black text-lg">F</span>
              </div>
              <span className="font-logo text-xl text-white">FreekiWebsite</span>
            </Link>
          </div>

          {/* Center: Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center items-center space-x-8">
            {/* Services Dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('services')} onMouseLeave={handleMouseLeave}>
              <button
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
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('industries')} onMouseLeave={handleMouseLeave}>
              <button
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
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Clients Dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('clients')} onMouseLeave={handleMouseLeave}>
              <button
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
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About Dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('about')} onMouseLeave={handleMouseLeave}>
              <button
                className="flex items-center space-x-1 text-white hover:text-gray-300 transition-colors whitespace-nowrap"
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
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Insights Dropdown */}
            <div className="relative" onMouseEnter={() => handleMouseEnter('insights')} onMouseLeave={handleMouseLeave}>
              <button
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
                      onClick={() => setActiveDropdown(null)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          {/* Right: CTA Button (Desktop) + Mobile Menu Button */}
          <div className="flex-1 flex items-center justify-end">
             <div className="hidden lg:block">
                <Link to="/contact" className="btn-get-in-touch">
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
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-black border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/services" className="block px-3 py-2 text-white hover:bg-gray-900">Services</Link>
              <Link to="/industries" className="block px-3 py-2 text-white hover:bg-gray-900">Industries</Link>
              <Link to="/clients" className="block px-3 py-2 text-white hover:bg-gray-900">Clients</Link>
              <Link to="/about" className="block px-3 py-2 text-white hover:bg-gray-900">About us</Link>
              <Link to="/insights" className="block px-3 py-2 text-white hover:bg-gray-900">Insights</Link>
              <Link to="/contact" className="block px-3 py-2 text-white hover:bg-gray-900">Get in touch</Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar; 