// src/components/NavBar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <nav>
            <ul className="nav-bar">
                <li>
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="nav-link">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="nav-link">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
