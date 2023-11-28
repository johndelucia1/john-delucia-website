// src/components/NavBar.js
import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <ul className="nav-bar">
                <li>
                    <NavLink exact to="/" className="nav-link" activeClassName="active-link">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about" className="nav-link" activeClassName="active-link">
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className="nav-link" activeClassName="active-link">
                        Contact
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
