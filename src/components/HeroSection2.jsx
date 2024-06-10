// import React from 'react'

// const HeroSection2 = () => {
//   return (
   
//    <section className='hero2'>
//      <div className='hero2-first'>
//         <div>
//       <h2><span>Create, customize, and publish</span> your digital persona to life effortlessly.</h2>
//       </div>
//      </div>
//    </section>
//   )
// }

// export default HeroSection2

import React, { useEffect, useRef } from 'react';


const HeroSection2 = () => {
  const textRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const text = textRef.current;
      const scrollPosition = window.scrollY;

      if (scrollPosition > 100) {
        text.classList.add('text-animate-in');
      } else {
        text.classList.remove('text-animate-in');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section className="hero2">
      <div className="hero2-first">
        <div ref={textRef}>
          <h2><span>Create, customize, and publish</span> your digital persona to life effortlessly.</h2>
        </div>
      </div>
    </section>
  );
};

export default HeroSection2;
