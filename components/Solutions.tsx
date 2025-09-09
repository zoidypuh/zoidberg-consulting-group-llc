
import React from 'react';

const ServiceCard: React.FC<{ icon: JSX.Element; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-brand-secondary p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
    <div className="text-brand-light mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-brand-light">{description}</p>
  </div>
);

const Solutions: React.FC = () => {
  const services = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
      title: 'Proprietary Trading',
      description: 'We deploy capital across multiple asset classes and global markets, utilizing sophisticated strategies and comprehensive risk management frameworks.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
      title: 'Asset Management',
      description: 'Our investment management approach focuses on capital preservation and measured growth through diversified portfolios and disciplined allocation strategies.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
      title: 'Financial Market Analysis',
      description: 'We conduct comprehensive market research and analysis across traditional and emerging markets to identify opportunities and manage portfolio risk.',
    },
  ];

  return (
    <section id="services" className="py-20 bg-brand-primary">
      <div className="container mx-auto px-6 text-center animate-fade-in">
        <h2 className="text-4xl font-bold mb-4">What We Do</h2>
        <p className="text-lg text-brand-light max-w-2xl mx-auto mb-12">
          Our core activities encompass investment management, market analysis, and proprietary trading operations.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
