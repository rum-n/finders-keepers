import React from 'react';
import './styles.css';
import logo from './../../img/keepers.png';

const Footer = () => {
    return (
        <footer>
            <div className='footer-logo'> 
                <img src={logo} alt='Finders/Keepers Logo'/>
                <p>2020. All rights reserved.</p>
            </div>
            <div className='credits'>
                <p>Created by <a href='https://rmanev.com'>Rumen Manev</a></p>
                <p>Illustrations by <a href='https://www.etsy.com/shop/Nordkins?ref=simple-shop-header-name&listing_id=790177072'>Nordkins</a></p>
            </div>
        </footer>
    )
};

export default Footer;