
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-brand-primary">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-4 animate-fade-in">About Zoidberg Consulting Group</h2>
        <div className="max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          <p className="text-lg text-brand-light mb-6">
            Founded on the principle of synergistic disruption, Zoidberg Consulting Group LLC emerged as a vanguard of the new digital economy. We are more than consultants; we are catalysts for change, dedicated to recalibrating the core competencies of our clients for optimal market performance.
          </p>
          <p className="text-lg text-brand-light">
            Our team of goal-driven thought leaders and digital natives possess a deep-seated passion for leveraging technology to solve mission-critical challenges. We thrive on complexity and are committed to delivering frictionless, end-to-end strategic frameworks that yield measurable, impactful results.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
