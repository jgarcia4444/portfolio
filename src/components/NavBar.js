import React from 'react';
import { NavLink as Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/projects">Projects</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavBar