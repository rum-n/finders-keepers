import React from 'react';
import './styles.css';
import logo from './../../img/keepers-small.png';

const Compare = () => {
    return (
        <div className='compare-wrapper'>
            <h1>Compare it with other <br/>ways to fill your sales funnel</h1>
            <table>
            <tr>
                <th></th>
                <th><img src={logo} alt='Finders/Keepers Logo'/></th>
                <th>Onboarding a <br/>Sales Rep</th>
                <th>Lead generation <br/>agency</th>
                <th>Finding projects <br/>yourself</th>
            </tr>
            <tr>
                <td className='table-item'><strong>Monthly cost</strong></td>
                <td className='table-finders'>$89</td>
                <td>~ $1,500+</td>
                <td>~ $3,000+</td>
                <td>$0</td>
            </tr>
            <tr>
                <td className='table-item'><strong>Amount of leads per month</strong></td>
                <td className='table-finders'>10 - 40</td>
                <td>~ 60 - 100</td>
                <td>~ 400+</td>
                <td>~ 100</td>
            </tr>
            <tr>
                <td className='table-item'><strong>Quality of leads</strong></td>
                <td className='table-finders'>exactly what you need</td>
                <td>bad at first</td>
                <td>random</td>
                <td>what you need</td>
            </tr>
            <tr>
                <td className='table-item'><strong>Time until first lead</strong></td>
                <td className='table-finders'>next week</td>
                <td>min. 1 month</td>
                <td>min. 1 month</td>
                <td>right away</td>
            </tr>
            <tr>
                <td className='table-item'><strong>Time you must spend</strong></td>
                <td className='table-finders'>0 hrs</td>
                <td>2 hrs / day</td>
                <td>1 hr / day</td>
                <td>4 hrs / day</td>
            </tr>
            </table>
        </div>
    )
};

export default Compare;