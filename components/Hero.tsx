
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        {/* Financial gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        {/* Animated financial chart lines */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1000 600">
          <defs>
            <linearGradient id="chartGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#60A5FA" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#60A5FA" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="chartGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#34D399" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#34D399" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* First chart line with fill */}
          <path
            d="M0,300 L100,280 L200,320 L300,290 L400,310 L500,270 L600,290 L700,250 L800,280 L900,260 L1000,240 L1000,600 L0,600 Z"
            fill="url(#chartGradient1)"
            className="animate-pulse"
          />
          <polyline
            fill="none"
            stroke="#60A5FA"
            strokeWidth="2"
            points="0,300 100,280 200,320 300,290 400,310 500,270 600,290 700,250 800,280 900,260 1000,240"
            className="animate-pulse"
            opacity="0.8"
          />
          
          {/* Second chart line with fill */}
          <path
            d="M0,400 L100,380 L200,360 L300,390 L400,350 L500,370 L600,340 L700,350 L800,320 L900,330 L1000,310 L1000,600 L0,600 Z"
            fill="url(#chartGradient2)"
            style={{ animationDelay: '1s' }}
            className="animate-pulse"
          />
          <polyline
            fill="none"
            stroke="#34D399"
            strokeWidth="2"
            points="0,400 100,380 200,360 300,390 400,350 500,370 600,340 700,350 800,320 900,330 1000,310"
            style={{ animationDelay: '1s' }}
            className="animate-pulse"
            opacity="0.8"
          />
        </svg>
        
        {/* Subtle radial glow */}
        <div className="absolute inset-0 opacity-30"
          style={{
            background: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.3) 0%, transparent 70%)'
          }}
        ></div>
      </div>
      <div className="relative z-10 px-6 animate-fade-in-up">
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
