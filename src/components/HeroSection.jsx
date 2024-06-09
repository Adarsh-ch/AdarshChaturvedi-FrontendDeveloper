import React from 'react';
import P1 from '../assets/images/personalities/P1.png';
import P2 from '../assets/images/personalities/P2.png';
import P3 from '../assets/images/personalities/P3.png';
import P4 from '../assets/images/personalities/P4.png';
import P5 from '../assets/images/personalities/P5.png';
import P6 from '../assets/images/personalities/P6.png';
import P7 from '../assets/images/personalities/P7.png';
import P8 from '../assets/images/personalities/P8.png';
import P9 from '../assets/images/personalities/P9.png';
const HeroSection = () => {
  return (
    <section className="hero">
      <div className='hero-div1'>
        <button><span>🎉</span><span>New in AI.GEN: Real Time Interaction</span></button>
      <h1>IOTA polygon serum ipsum WAX terraUSD gala THETA.</h1>
      <p> Chiliz serum TRON dash aave cardano crypto celo. Golem ankr bancor horizen ethereum quant bitcoin.</p>
      <button>Get Started</button>
      </div>
      <div className='hero-div2'>
        <div>
          <img src={P1} alt="Elon" />
          <img src={P2} alt="Bill" />
          <img src={P3} alt="Tim cook" />
        </div>
        <div>
          <img src={P4} alt="Donald" />
          <img src={P5} alt="Mark" />
          <img src={P6} alt="c" />
        </div>
        <div>
          <img src={P7} alt="Joe" />
          <img src={P8} alt="elber" />
          <img src={P9} alt="l" />
        </div>
      </div>
     
    </section>
  );
};

export default HeroSection;
