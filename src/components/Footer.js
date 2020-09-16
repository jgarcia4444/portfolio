import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="row">
                <div className="copyright six columns">
                    Jake Garcia &copy; 2020
                </div>
                <div className="six columns">
                    <NavLink className="contact-link" to="/contact">
                        Contact
                    </NavLink>
                </div>
            </div>
        </div>
        
    )
}

export default Footer;