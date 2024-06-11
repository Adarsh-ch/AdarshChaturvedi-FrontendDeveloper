import React from 'react';
import Outfit_1 from '../assets/images/personalities/Outfit-1.png';
import Outfit_2 from '../assets/images/personalities/Outfit-2.png';
import Outfit_3 from '../assets/images/personalities/Outfit-3.png';
import Outfit_4 from '../assets/images/personalities/Outfit-4.png';

const Outfit = () => {
  return (
    <section className='outfit'>
      <div className='outfit-1'>
        <img src={Outfit_1} alt="Outfit 1" />
        <img src={Outfit_2} alt="Outfit 2" />
      </div>
      <div className='outfit-2'>
        <img src={Outfit_3} alt="Outfit 3" />
        <img src={Outfit_4} alt="Outfit 4" />
      </div>
    </section>
  );
};

export default Outfit;
