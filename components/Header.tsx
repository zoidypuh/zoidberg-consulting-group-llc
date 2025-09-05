
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navLinks = [
    { href: '#solutions', label: 'Solutions' },
    { href: '#vision', label: 'Vision' },
    { href: '#about', label: 'About Us' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-primary/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-black tracking-wider text-brand-text">
            ZCG
          </a>
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="text-brand-light hover:text-brand-text transition duration-300">
                {link.label}
              </a>
            ))}
          </nav>
          <a href="#contact" className="hidden md:block bg-brand-accent hover:bg-brand-light text-white font-bold py-2 px-4 rounded-lg transition duration-300">
            Engage
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
