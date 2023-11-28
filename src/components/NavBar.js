// src/components/NavBar.js
import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    const location = useLocation();

    return (
        <nav>
            <ul className="nav-bar">
                <li>
                    <NavLink exact to="/" className={`nav-link ${location.pathname === '/' ? 'active-link' : ''}`}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={`nav-link ${location.pathname === '/about' ? 'active-link' : ''}`}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active-link' : ''}`}>
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
