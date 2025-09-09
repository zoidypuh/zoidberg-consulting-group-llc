
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/finance/1920/1080"
          alt="Financial markets background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-primary opacity-70"></div>
      </div>
      <div className="relative z-10 px-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
          Zoidberg Consulting Group <span className="text-brand-light">LLC</span>
        </h1>
        <p className="text-lg md:text-xl text-brand-light max-w-3xl mx-auto mb-8">
          A proprietary investment company managing our own funds with a focus on global markets and digital assets.
        </p>
        <a
          href="#about"
          className="bg-brand-accent hover:bg-brand-light text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;
