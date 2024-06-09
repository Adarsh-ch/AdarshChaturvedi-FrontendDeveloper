import React from 'react'
import R1 from '../assets/images/personalities/Roadmap1.png'
import R2 from '../assets/images/personalities/Roadmap2.png'
import R3 from '../assets/images/personalities/Roadmap3.png'
const Roadmap = () => {
  return (
    <section className="roadmap">
    <h1>Roadmap</h1>
   <div className="roadmap-inner">
    <div>
        <h2 id='Phase1'>PHASE1</h2>
        <ul>
            <li>Horizen dai dai harmony dogecoin waves nexo.</li>
            <li>Flow horizen waves dash tether zcash waves dash terraUSD</li>
            <li>Quant harmony amp cosmos PancakeSwap decentraland decred.</li>
            <li>Serum TRON solana tether holo crypto. Flow eCash amp EOS digibyte stellar</li>
        </ul>
    </div>
    <img src={R1} alt="" />
   </div>
   <div className="roadmap-inner">
   <div>
        <h2>PHASE2</h2>
        <ul>
            <li>BitTorrent dai dogecoin crypto nexo nexo cosmos tezos ox PancakeSwap. </li>
            <li>Tether ethereum helium eCash IOTA. Litecoin enjin shiba-inu dash audius monero. </li>
            <li>Aave PancakeSwap loopring horizen neo uniswap avalanche litecoin celsius TRON.</li>
            <li>Hive stellar velas flow cardano.</li>
        </ul>
    </div>
    <img src={R2} alt="" />
   </div>
   <div className="roadmap-inner">
   <div>
        <h2>PHASE3</h2>
       <ul>
        <li>Revain audius bitcoin revain PancakeSwap elrond ipsum ethereum.</li>
        <li>Waves TRON dogecoin bancor eCash quant secret.</li>
        <li>Celsius crypto bancor nexo litecoin decentraland crypto.</li>
       </ul>
  
    </div>
    <img src={R3} alt="" />
   </div>
  </section>
  )
}

export default Roadmap
