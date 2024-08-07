// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/assets/logo.png" alt="Logo" /> {/* Update the path to your logo */}
            </div>
            <div className="nav-container">
                <nav className="nav-links">
                    <Link to="/">Home</Link>
                    <Link to="/achievements">Achievements</Link>
                    <Link to="/projects">Projects</Link>
                    <Link to="/about">About Us</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;