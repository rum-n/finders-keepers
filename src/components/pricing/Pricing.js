import React from 'react';
import './styles.css';


const Pricing = () => {
    return (
        <div className='pricing-wrapper' id='price'>
            <h1>Pricing</h1>
            <h2>Simple. Made for everyone. Know what you get.</h2>
            <div className='pricing-options'>
                <div className='price-plan'>
                <h2>Monthly</h2>
                <p className='price'><span>$129</span>$89</p>
                <p><strong>Save 30%!</strong></p>
                <a href='https://finderskeepers.substack.com/'><button>Try for free!</button></a>
                </div>
                <div className='price-plan'>
                <h2>Yearly</h2>
                <p className='price'><span>$1,290</span>$890</p>
                <p><strong>Save 30%!</strong></p>
                <a href='https://finderskeepers.substack.com/'><button>Try for free!</button></a>
                </div>
            </div>
        </div>
    )
};

export default Pricing;