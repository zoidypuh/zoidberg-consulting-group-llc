
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="bg-brand-primary text-brand-text font-sans antialiased">
      <Header />
      <main>
        <Hero />
        <About />
        <Solutions />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
