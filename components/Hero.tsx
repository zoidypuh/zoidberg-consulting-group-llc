
import React from 'react';
import Logo from './Logo';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/zoidberg/1920/1080"
          alt="Abstract background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-primary opacity-70"></div>
      </div>
      <div className="relative z-10 px-6 animate-fade-in-up">
        <div className="mb-6 animate-bounce-slow">
          <Logo size={120} className="mx-auto drop-shadow-2xl" />
        </div>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-4">
          Synergizing Tomorrow's <span className="text-brand-light">Paradigms</span>, Today.
        </h1>
        <p className="text-lg md:text-xl text-brand-light max-w-3xl mx-auto mb-8">
          We architect goal-driven, AI-powered frameworks to unlock scalable value and drive holistic digital transformation across the enterprise ecosystem.
        </p>
        <a
          href="#solutions"
          className="bg-brand-accent hover:bg-brand-light text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 transform hover:scale-105"
        >
          Discover Our Synergy
        </a>
      </div>
    </section>
  );
};

export default Hero;
