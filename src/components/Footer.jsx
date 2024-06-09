import React from 'react';
import f1 from '../assets/images/personalities/f1.png';
import f2 from '../assets/images/personalities/f2.png';
import f3 from '../assets/images/personalities/f3.png';
import f4 from '../assets/images/personalities/f4.png';
const Footer = () => {
  return (
    <footer className="footer">
      <div className='footer-1'>
            <p>Dash dash terraUSD neo uniswap kadena helium avalanche polymath bancor.</p>
            <div >
              
              <span>Looking for help?</span>
              <div className='input-div'><input type="text" placeholder='Enter your Email'/>
              <button>submit</button></div>
              
            </div>
            </div>
            <hr />
            <div className='footer-2'><h3>AI. GEN</h3> <div>
              <img src={f1} alt="" /><img src={f2} alt="" /><img src={f3} alt="" /><img src={f4} alt="" />
              </div></div>
    </footer>
  );
};

export default Footer;
