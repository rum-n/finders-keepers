import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';
import logo from '../../img/keepers-logo.png';

const Navigation = () => {
    return (
    <header>
        <Link to='/'>
            <div className='logo'>
                <img src={logo} alt='Logo'/>
            </div>
        </Link>
        <nav>
            <ul className='menu'>
                <li><a href='#how'>How it works</a></li>
                <li><a href='#price'>Pricing</a></li>
            </ul>
        </nav>         
            <a href='https://finderskeepers.substack.com/'><button>Get Started</button></a>
    </header>
    )
};

export default Navigation;