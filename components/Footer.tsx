
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-primary border-t border-brand-accent py-6">
      <div className="container mx-auto px-6 text-center text-brand-light">
        <p>&copy; {new Date().getFullYear()} Zoidberg Consulting Group LLC. All Rights Reserved.</p>
        <p className="text-sm mt-4">
          A proprietary investment company focused on global markets.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
