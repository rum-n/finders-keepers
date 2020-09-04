import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../img/keepers.png';

const DashboardNav = () => {
    return (
    <header>
        <Link to='/dashboard'>
            <div className='logo'>
                <img src={logo} alt='Logo'/>
            </div>
        </Link>
        <nav>
            <ul className='menu'>
                <li><a href='#how'>Resources</a></li>
                <li><a href='#price'>Share a project</a></li>
            </ul>
        </nav>
            <a href='https://finderskeepers.substack.com/'><button>Logout</button></a>
    </header>
    )
};

export default DashboardNav;