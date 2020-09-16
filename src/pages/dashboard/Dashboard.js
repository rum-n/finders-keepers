import React from 'react';
import './styles.css';
import design from './../../img/design.svg';
import dev from './../../img/dev.svg';
import marketing from './../../img/write.svg';
import crypto from './../../img/crypto.svg';
import DashNav from './../../components/nav/DashboardNav';
import { Link } from 'react-router-dom';

function Dashboard() {

  return (
  <React.Fragment>
      <DashNav/>
        <div className='main-dashboard'>
            <h1>What projects are you looking for today?</h1>
            <div className='project-types'>
                <Link to='./ux-ui-design'>
                <div className='project-variant design-box'>
                    <h3>UX & UI <br/>design</h3>
                    <img src={design} alt='Design Icon'/>
                </div>
                </Link>
                <Link to='./web-dev'>
                <div className='project-variant dev-box'>
                    <h3>Web <br/>development</h3>
                    <img src={dev} alt='Development icon'/>
                </div>
                </Link>
                <Link to='./graphic-design'>
                <div className='project-variant marketing-box'>
                    <h3>Graphic <br/>Design</h3>
                    <img src={marketing} alt='Marketing icon'/>
                </div>
                </Link>
                <Link to='./mobile-development'>
                <div className='project-variant crypto-box'>
                    <h3>Mobile <br/>development</h3>
                    <img src={crypto} alt='Marketing icon'/>
                </div>
                </Link>
            </div>
            {/* <button>See all project</button>*/}
        </div>
    </React.Fragment>
  )
}

export default Dashboard;