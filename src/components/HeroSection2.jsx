
import React, { useEffect, useRef } from 'react';


const HeroSection2 = () => {
  const textRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const text = textRef.current;
      const section = sectionRef.current;
      const scrollPosition = window.scrollY;
      const sectionTop = section.getBoundingClientRect().top + window.scrollY;

     
      const speedFactor = 1.5;
      
      if (scrollPosition > sectionTop) {
        const offset = (scrollPosition - sectionTop) * speedFactor;
        text.style.transform = `translateY(-${offset}px)`;
      } else {
        text.style.transform = 'translateY(0)';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero2" ref={sectionRef}>
      <div className="hero2-first">
        <div>
          <h2 ref={textRef}>
            <span>Create, customize, and publish</span> your digital persona to life effortlessly.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;

