import React from 'react';
import Header from './components/ Header';
import HeroSection from './components/HeroSection';
import HowItWorks from './components/ HowItWorks';
import Tokenomics from './components/Tokenomics';

import Footer from './components/Footer';
import HeroSection2 from './components/HeroSection2';
import Scroll from './components/Scroll';
import Outfit from './components/Outfit';
import Roadmap from './components/Roadmap';

const App = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <HeroSection2/>
      {/* <AvatarGrid /> */}
      <HowItWorks />
      <Scroll/>
      <Outfit/>
      <Tokenomics />
      <Roadmap/>
      <Footer />
    </div>
  );
};

export default App;
