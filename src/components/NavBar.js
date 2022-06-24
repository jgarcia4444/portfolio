import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = (props) => {
    return (
        <div className="navbar">
            <div className="nav-title-container">
                <h5 className="nav-title">
                    <Link className="nav-item" to="/">
                        Jake's Portfolio
                    </Link>
                </h5>
            </div>
            <div className="nav-items-container">
                <div className="nav-item">
                    <Link className="nav-links" to="/">Home</Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-links" to="/about">About</Link>
                </div>
                <div className="nav-item">
                    <Link className="nav-links" to="/projects">Projects</Link>
                </div>
            </div>
        </div>
    )
}

export default NavBar;