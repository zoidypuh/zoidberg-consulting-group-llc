
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary border-t border-brand-accent py-6">
      <div className="container mx-auto px-6 text-center text-brand-light">
        <p>&copy; {new Date().getFullYear()} Zoidberg Consulting Group LLC. All Rights Reserved.</p>
        <p className="text-sm mt-1">Pioneering the Next Wave of Enterprise Synergy.</p>
      </div>
    </footer>
  );
};

export default Footer;
