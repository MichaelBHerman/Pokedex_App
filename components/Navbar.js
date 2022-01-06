import React from 'react';
import './style.css';
import navlogo from './images/pokedex.png';
import { NavLink } from 'react-router-dom';
import HomePage from '../pages/home';
import audrey from './images/audreyfont.png';


function Navbar() {
    return (
        <div className="Navbar">
           
            <img src={audrey} className='Navlogo1' />
            <img src={navlogo} className='Navlogo'/>
            <HomePage />
            <nav>
                {/* <NavLink to='./trainercard'>Click Here For Trainer Card</NavLink> */}
            </nav>
           
            
        </div>
    );
}

export default Navbar;
