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
                <p className='price'><span>$95</span>$75</p>
                <p><strong>Save 20%!</strong></p>
                <a href='https://app.finderskeepers.pro/'><button>Try for free!</button></a>
                </div>
                <div className='price-plan'>
                <h2>Yearly</h2>
                <p className='price'><span>$950</span>$600</p>
                <p><strong>Save 20% + get 4 months for free!</strong></p>
                <a href='https://app.finderskeepers.pro/'><button>Try for free!</button></a>
                </div>
            </div>
        </div>
    )
};

export default Pricing;