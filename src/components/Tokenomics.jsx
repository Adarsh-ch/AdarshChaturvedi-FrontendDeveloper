import React from 'react';
import Donut from '../assets/images/personalities/Donut.png';

const Tokenomics = () => {
  return (
    <>
    <section className="tokenomics">
      <h2>Tokenomics</h2>
      <div className='tokenomics-1'>
      <div className='tokenomics-1_div1'>
        <div><span id='span1'>Name</span><span>: AI GEN</span></div>
        <div><span id='span1'>Total Supply</span><span>: 1B</span></div>
        <div><span id='span1'>Contract</span> <span>: Lorem ipsum dolor sit </span></div>
      </div>
      <div className='tokenomics-1_div2'>
      <div><span>Token Name</span> <span>: $AIGEN</span></div>
        <div><span>Circualting Supply</span><span>: 1B</span></div>
        <div><span>Chain</span><span>: Ethereum</span></div>
      </div>
      </div>
      <div className='tokenomics-2'>
      <img src={Donut} alt="Donut" />
      <div className='tokenomics-2_inner'>
       <div><span></span> <div><span>Partnership</span><span>: 5% tokens</span></div></div>
        <div><span></span><div><span>LP Pool</span><span>: 35% tokens</span></div></div>
        <div><span></span><div><span>Burned</span><span>: 30% tokens</span></div></div>
        <div><span></span><div><span>BNB LP Pool</span><span>: 30% tokens</span></div></div>
      </div>
      </div>
    </section>
    
    </>
  );
};

export default Tokenomics;
