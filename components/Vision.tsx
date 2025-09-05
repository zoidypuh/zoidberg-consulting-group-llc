
import React from 'react';

const Vision: React.FC = () => {
  return (
    <section id="vision" className="py-20 bg-brand-secondary overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-white mb-4">Architecting the Future</h2>
            <p className="text-lg text-brand-light mb-6">
              Our vision is to be the global leader in paradigm-shifting enterprise solutions. We strive to empower organizations to not just navigate but define the future of their industries through disruptive innovation and strategic foresight.
            </p>
            <p className="text-lg text-brand-light">
              By operationalizing bleeding-edge technology and fostering a culture of hyper-collaboration, we build sustainable ecosystems for growth and create unparalleled stakeholder value in a decentralized, data-driven world.
            </p>
          </div>
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/vision/800/600" 
              alt="Vision of the future"
              className="rounded-xl shadow-2xl w-full h-auto object-cover transform transition duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
