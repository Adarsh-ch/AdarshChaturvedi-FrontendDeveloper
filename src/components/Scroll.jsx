
import React, { useEffect } from 'react';

const Scroll = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scroll1 = document.querySelector('.scroll-1');
      const scroll2 = document.querySelector('.scroll-2');

      if (scroll1 && scroll2) {
        scroll1.style.transform = `translateX(${-scrollTop * 0.1}px)`;
        scroll2.style.transform = `translateX(${scrollTop * 0.1}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className='scroll'>
      <div className='scroll-1'>
        <span>Avatar</span>
        <span>Technology</span>
        <span>Design</span>
        <span>Artificial Intelligence</span>
        <span>AI Chat Bot</span>
        <span>Customizable</span>
        <span>3d Model</span>
      </div>
      <div className='scroll-2'>
        <span>People</span>
        <span>Create Videos</span>
        <span>Analyze</span>
        <span>Outfits</span>
        <span>3d Model</span>
        <span>Voice Chat</span>
        <span>Marketing</span>
        <span>Realistic</span>
      </div>
    </section>
  );
};

export default Scroll;

