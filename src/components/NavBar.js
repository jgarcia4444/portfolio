import React, {useState} from 'react';
import { NavLink as Link } from 'react-router-dom';
import '../styles/NavBar.css';
import useWindowDimensions from '../CustomHooks/useWindowDimensions';
import {HiMenu} from 'react-icons/hi';

const NavBar = (props) => {

    const {height, width} = useWindowDimensions();
    const [showMobileNavLinks, setShowMobileNavLinks] = useState(false);

    const computerViewNavLinks =  (
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
    );

    const mobileViewNavLinks = (
        <div className="mobile-nav-items-container">
            <div onClick={() => setShowMobileNavLinks(!showMobileNavLinks)} className="mobile-menu-button">
                <HiMenu color={'white'} size={36} />
            </div>
            {showMobileNavLinks === true &&
                <div className="nav-links-modal">
                    <div className="mobile-nav-link-row">
                        <Link onClick={() => setShowMobileNavLinks(false)} to="/" className="mobile-nav-link">Home</Link>
                    </div>
                    <div className="mobile-nav-link-row">
                        <Link onClick={() => setShowMobileNavLinks(false)} to="/about" className="mobile-nav-link">About</Link>
                    </div>
                    <div className="mobile-nav-link-row">
                        <Link onClick={() => setShowMobileNavLinks(false)} to="/projects" className="mobile-nav-link">Projects</Link>
                    </div>
                    <div className="mobile-nav-link-row">
                        <Link onClick={() => setShowMobileNavLinks(false)} to="/contact" className="mobile-nav-link">Contact</Link>
                    </div>
                </div>
            }
        </div>
    );

    const renderNavLinks = () => {
        if (width < 601) {
            return mobileViewNavLinks;
        } else {
            return computerViewNavLinks    
        }
    }

    return (
        <div className="navbar">
            <div className="nav-title-container">
                <h5 className="nav-title">
                    <Link className="nav-item" to="/">
                        Jake's Portfolio
                    </Link>
                </h5>
            </div>
            {renderNavLinks()}
        </div>
    )
}

export default NavBar;