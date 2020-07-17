import React from 'react';
import './styles.css';

const Subheader = () => {
    return (
    <div className='second-screen'>
        <h1>The only thing between you and success <br/>is a predictable sales funnel.</h1>
        <div className='process'>
            <div className='step'>
                <h2>Subscribe<br/> for free <br/>for our weekly newsletter</h2>
            </div>
            <div className='step'>
                <h2>Get a list of curated remote projects you can apply for today</h2>
            </div>
            <div className='step'>
                <h2>Contact the companies and close more projects</h2>
            </div>
        </div>
    </div>
    )
};

export default Subheader;