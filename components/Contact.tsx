
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-brand-secondary">
      <div className="container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
          <p className="text-lg text-brand-light max-w-2xl mx-auto mb-8">
            For inquiries regarding Zoidberg Consulting Group LLC, please contact us via email.
          </p>
          <a
            href="mailto:info@zoidbergcg.com"
            className="inline-block bg-brand-accent hover:bg-brand-light text-white font-bold py-4 px-10 rounded-full text-xl transition duration-300 transform hover:scale-105"
          >
            info@zoidbergcg.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
