import React from 'react';
import './styles.css';

const Why = () => {
    return (
        <React.Fragment>
    <div className='third-screen' id='how'>
        <h1>Why this works</h1>
        <p>For the past 7 years, I've been working as a sales professional in the IT industry. During that time, I've found out that it's futile to keep cold messaging companies, hoping they might be looking for what you're offering.</p>
        <p>It's like throwing stones in the dark, hoping to hit a target a 100 yards away.</p>
        <p>Instead, I've developed a process to find the companies that are searching for exactly what my team was offering.</p>
        <p>By focusing on the companies that have a specific need I can help with, I've increased the chances of closing a project. The bonus is that those companies also find what they're looking for - someone to do the job.</p>
        <p>Unlike the randomly contacted prospect, those leads won't be annoyed you're reaching out to them, because it directly relates to something they need.</p>
        <p>It's a win-win.</p>
        <a href='https://finderskeepers.substack.com/'><button className='primary'>Get started for free</button></a>
    </div>
    <div className='third-screen'>
        <h1>Where I find projects</h1>
        <p>Everyday, I'm browsing through <strong>86</strong> (this number changes as I discover more sources) platforms online. Those are job boards, blogs, public tender lists, and other websites across the globe.</p> 
        <p>There is no algorithm doing this automatically.</p>
        <p>It's just me, going through job offers and project listings, selecting those that are relevant for you - companies looking for help with design or development, open to remote and contract work.</p>
        <p>Subscribe today and for a tiny fraction of the project fee you might earn, you'll receive a weekly list of remote projects you can apply for.</p>
        <br/>
        <a href='https://finderskeepers.substack.com/'><button className='primary'>Get started for free</button></a>
    </div>
    </React.Fragment>
    )
};

export default Why;