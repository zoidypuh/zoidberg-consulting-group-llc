
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Vision from './components/Vision';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-primary text-brand-text font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <Solutions />
        <Vision />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
