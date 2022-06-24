import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import '../styles/NavBar.css';

const NavBar = (props) => {
    return (
        <div className="navbar">
            <h5 className="nav-title">
                <Link className="nav-item" to="/">
                    Jake's Portfolio
                </Link>
            </h5>
            <ul className="nav-items-container">
                <li className="nav-item">
                    <Link className="nav-links" to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-links" to="/about">About</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-links" to="/projects">Projects</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar;