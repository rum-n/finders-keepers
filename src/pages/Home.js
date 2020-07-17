import React from 'react';
import './styles.css';
import Subheader from './../components/subheader/Subheader';
import Why from './../components/whyitworks/Why';
import Pricing from './../components/pricing/Pricing';
import Compare from './../components/compare/Compare';

function Home() {
  return (
    <div className='main'>
        <h1 className='title'>Remote projects for <br/><span className='freelance'>freelancers and agencies</span>, <br/>delivered directly to you</h1>
        <div className='button-wrapper'>
            <a href='https://finderskeepers.substack.com/'><button className='primary'>Get Started</button></a>
            <a href='#how'><button className='secondary'>See how it works</button></a>
        </div>
        <div id="scroll-down"><span className="arrow-down"></span>
    </div>
        <Subheader/>
        <Why/>
        <Pricing/>
        <Compare/>
    </div>
  )
}

export default Home;