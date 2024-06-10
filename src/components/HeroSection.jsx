// import React, { useEffect } from 'react';
import { useEffect } from 'react';
import P1 from '../assets/images/personalities/P1.png';
import P2 from '../assets/images/personalities/P2.png';
import P3 from '../assets/images/personalities/P3.png';
import P4 from '../assets/images/personalities/P4.png';
import P5 from '../assets/images/personalities/P5.png';
import P6 from '../assets/images/personalities/P6.png';
import P7 from '../assets/images/personalities/P7.png';
import P8 from '../assets/images/personalities/P8.png';
import P9 from '../assets/images/personalities/P9.png';
// import './HeroSection.css';

const HeroSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const div1 = document.querySelector('.hero-div2 > div:nth-of-type(1)');
      const div2 = document.querySelector('.hero-div2 > div:nth-of-type(2)');
      const div3 = document.querySelector('.hero-div2 > div:nth-of-type(3)');

      if (div1 && div2 && div3) {
        div1.style.transform = `translateY(${scrollPosition * -0.5}px)`;
        div2.style.transform = `translateY(${scrollPosition * -0.3}px)`;
        div3.style.transform = `translateY(${scrollPosition * -0.5}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero">
      <div className="hero-div1">
        <button><span role="img" aria-label="celebration">🎉</span><span>New in AI.GEN: Real Time Interaction</span></button>
        <h1>IOTA polygon serum ipsum WAX terraUSD gala THETA.</h1>
        <p> Chiliz serum TRON dash aave cardano crypto celo. Golem ankr bancor horizen ethereum quant bitcoin.</p>
        <button>Get Started</button>
      </div>
      <div className="hero-div2">
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
