import React from 'react';
import Header from './components/ Header';
import HeroSection from './components/HeroSection';
// import AvatarGrid from './components/AvatarGrid';
import HowItWorks from './components/ HowItWorks';
import Tokenomics from './components/Tokenomics';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      {/* <AvatarGrid /> */}
      <HowItWorks />
      <Tokenomics />
      <Roadmap />
      <Footer />
    </div>
  );
};

export default App;
