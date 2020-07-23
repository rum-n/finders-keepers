import React from 'react';
import './styles.css';


const Pricing = () => {
    return (
        <div className='pricing-wrapper' id='price'>
            <h1>Pricing</h1>
            <h2>Simple. Sign up for free to browse most projects.<br/>Pay a monthly fee for full access to all projects.</h2>
            <div className='pricing-options'>
                <div className='price-plan'>
                    <h2>Monthly</h2>
                    <p className='price'><span>$80</span>$60</p>
                    <p><strong>Save 20%!</strong></p>
                    <p>Access to all projects.</p>
                    <a href='https://app.finderskeepers.pro/'><button>Try for free!</button></a>
                </div>
                    <div className='price-plan'>
                    <h2>Yearly</h2>
                    <p className='price'><span>$800</span>$480</p>
                    <p><strong>Save 20% & get 4 months for free!</strong></p>
                    <p>Access to all projects.</p>
                    <a href='https://app.finderskeepers.pro/'><button>Try for free!</button></a>
                </div>
            </div>
        </div>
    )
};

export default Pricing;