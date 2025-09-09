
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 animate-fade-in">About Us</h2>
        <div className="max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg text-brand-light mb-6">
            Zoidberg Consulting Group LLC is a proprietary investment company focused on investment management and market research. We apply disciplined strategies across global financial markets with an emphasis on risk management and capital preservation.
          </p>
          <p className="text-lg text-brand-light">
            Our approach combines traditional financial analysis with emerging market opportunities, including digital assets. We maintain a global outlook while adhering to rigorous risk management protocols and disciplined investment strategies.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
