
import React from 'react';

const SolutionCard: React.FC<{ icon: JSX.Element; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-brand-secondary p-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
    <div className="text-brand-light mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
    <p className="text-brand-light">{description}</p>
  </div>
);

const Solutions: React.FC = () => {
  const solutions = [
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
      title: 'Dynamic AI Integration',
      description: 'Leveraging next-gen machine learning algorithms to automate workflows and create self-optimizing business intelligence.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h1a2 2 0 002-2v-1a2 2 0 012-2h1.945M12 4v7m0 0l-3-3m3 3l3-3m-3 7v4m0 0l-3-3m3 3l3-3" /></svg>,
      title: 'Cloud-Native Value Orchestration',
      description: 'Architecting scalable, resilient, and cost-effective cloud infrastructures that serve as the backbone for digital innovation.',
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" /></svg>,
      title: 'Proactive Synergy Matrix',
      description: 'Implementing cross-functional communication platforms that break down silos and foster a culture of collaborative value creation.',
    },
  ];

  return (
    <section id="solutions" className="py-20 bg-brand-primary">
      <div className="container mx-auto px-6 text-center animate-fade-in">
        <h2 className="text-4xl font-bold mb-4">Our Agile Solutions</h2>
        <p className="text-lg text-brand-light max-w-2xl mx-auto mb-12">
          We deliver bespoke, high-impact solutions engineered for the new digital paradigm.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((s, i) => (
            <SolutionCard key={i} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
