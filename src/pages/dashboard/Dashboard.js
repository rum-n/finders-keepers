import React from 'react';
import './styles.css';
import design from './../../img/design.svg';
import dev from './../../img/dev.svg';
import marketing from './../../img/write.svg';
import crypto from './../../img/crypto.svg';
import DashNav from './../../components/nav/DashboardNav';

function Dashboard() {
  return (
  <React.Fragment>
      <DashNav/>
        <div className='main-dashboard'>
            <h1>Welcome to your Dashboard!</h1>
            <h2>What projects are you looking for today?</h2>
            <div className='project-types'>
                <div className='project-variant design-box'>
                    <h3>UX & UI <br/>design</h3>
                    <img src={design} alt='Design Icon'/>
                </div>
                <div className='project-variant dev-box'>
                    <h3>Web & Mobile development</h3>
                    <img src={dev} alt='Development icon'/>
                </div>
                <div className='project-variant marketing-box'>
                    <h3>Marketing & Copywriting</h3>
                    <img src={marketing} alt='Marketing icon'/>
                </div>
                <div className='project-variant crypto-box'>
                    <h3>Blockchain development</h3>
                    <img src={crypto} alt='Marketing icon'/>
                </div>
            </div>
        </div>
    </React.Fragment>
  )
}

export default Dashboard;