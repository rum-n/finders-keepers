import React from 'react';
import './styles.css';
import logo from './../../img/keepers.png';

const Compare = () => {
    return (
        <div>
            <h1>Compared with other <br/>ways to fill your sales funnel</h1>
        <div className='compare-wrapper'>
            <div className='alternative'>
                <br/>
                <img src={logo} alt='Finders/Keepers Logo'/>
                <ul>
                    <li>Cost: <strong>$60</strong></li>
                    <li>Leads per month: <strong>~ 20 - 50</strong></li>
                    <li>Lead quality: <strong>exactly what you need</strong></li>
                    <li>Time until first lead: <strong>next week</strong></li>
                    <li>Time you spend: <strong>0 hrs / day</strong></li>
                </ul>
            </div>
            <div className='alternative'>
                <h3>Onboarding a <br/>Sales Rep</h3>
                <ul>
                    <li>Cost: <strong>~ $1,500+</strong></li>
                    <li>Leads per month: <strong>~ 60 - 100</strong></li>
                    <li>Lead quality: <strong>bad at first</strong></li>
                    <li>Time until first lead: <strong>min. 1 month</strong></li>
                    <li>Time you spend: <strong>2 hrs / day</strong></li>
                </ul>
            </div>
            <div className='alternative'>
                <h3>Lead generation <br/>agency</h3>
                <ul>
                    <li>Cost: <strong>~ $3,000+</strong></li>
                    <li>Leads per month: <strong>~ 400+</strong></li>
                    <li>Lead quality: <strong>random</strong></li>
                    <li>Time until first lead: <strong>min. 1 month</strong></li>
                    <li>Time you spend: <strong>1 hr / day</strong></li>
                </ul>
            </div>
            <div className='alternative'>
                <h3>Finding projects <br/> yourself</h3>
                <ul>
                    <li>Cost: <strong>$0</strong></li>
                    <li>Leads per month: <strong>~ 100</strong></li>
                    <li>Lead quality: <strong>mixed</strong></li>
                    <li>Time until first lead: <strong>right away</strong></li>
                    <li>Time you spend: <strong>4 hrs / day</strong></li>
                </ul>
            </div>
        </div>
        </div>
    )
};

export default Compare;