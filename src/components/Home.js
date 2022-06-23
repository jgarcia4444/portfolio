import React from 'react';
import '../styles/Home.css';
import OpaqueContainer from '../shared/OpaqueContainer/index.js';
import { HiDesktopComputer, HiDeviceMobile } from 'react-icons/hi';

const Home = (props) => {

    return (
        <OpaqueContainer>
            <div className="row home">
                <div className="row welcome-row">
                    <h1 className="welcome-text">Welcome</h1>
                </div>
                <div className="row develop-row">
                    <h2 className="develop-text">I Develop</h2>
                </div>
                <div className="container web-mobile-container">
                    <div className="five columns web-columns">
                        <div className="row">
                            <h3>Web</h3>
                        </div>
                        <div className="row">
                            <HiDesktopComputer className="app-icon" size={116} color="#000" />
                        </div>
                    </div>
                    <div className="two columns and-columns">
                        <h3><strong>&</strong></h3>
                    </div>
                    <div className="five columns mobile-columns">
                    <div className="row">
                            <h3>Mobile</h3>
                        </div>
                        <div className="row">
                            <HiDeviceMobile className="app-icon" size={116} color="#000" />
                        </div>
                    </div>
                    <div className="twelve columns">
                        <h3>Applications</h3>
                    </div>
                    <div className="twelve columns">
                        <p className="explantion-text">With code written from scratch.</p>
                    </div>
                </div>
                <div className="container explanation-container">
                    <h3>I don't use ...</h3>
                    <ul className="donts-list">
                        <li>A CMS (content management system)</li>
                        <li>Click and drag software</li>
                    </ul>
                </div>
            </div>
        </OpaqueContainer>
    )
}

export default Home;