import React from 'react';
import '../styles/Home.css';
import OpaqueContainer from '../shared/OpaqueContainer/index.js';
import { HiDesktopComputer, HiDeviceMobile } from 'react-icons/hi';
import OutboundLink from '../shared/OutboundLink';

const Home = (props) => {

    return (
        <OpaqueContainer>
            <div className="container-fluid home">
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
                            <HiDesktopComputer className="app-icon" size={124} color="#000" />
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
                            <HiDeviceMobile className="app-icon" size={124} color="#000" />
                        </div>
                    </div>
                    <div className="twelve columns">
                        <h3>Applications</h3>
                    </div>
                </div>
                <div className="container">
                    <p className="explantion-text">With code written from scratch.</p>
                    <div className="using-list-container">
                        <div className="row using-title-row">
                            <div className="twelve columns">
                                <h4 className="using-title">Using:</h4>
                            </div>
                        </div>
                        <div className="row">
                            <div className="six columns left-using-columns">
                                <ul>
                                    <li><OutboundLink content="HTML" to="https://www.w3schools.com/html/" /></li>
                                    <li><OutboundLink content="CSS" to="https://developer.mozilla.org/en-US/docs/Web/CSS" /></li>
                                    <li><OutboundLink content="Javascript" to="https://developer.mozilla.org/en-US/docs/Web/JavaScript" /></li>
                                    <li><OutboundLink content="Ruby" to="https://www.geeksforgeeks.org/ruby-programming-language/"/></li>
                                </ul>
                            </div>
                            <div className="six columns right-using-columns">
                                <ul>
                                    <li><OutboundLink content="Bootstrap (CSS framework)" to="https://www.toptal.com/front-end/what-is-bootstrap-a-short-tutorial-on-the-what-why-and-how" /></li>
                                    <li><OutboundLink content="React (Javascript web framework)" to="https://reactjs.org/" /></li>
                                    <li><OutboundLink content="React Native (Javascript mobile framework)" to="https://reactnative.dev/" /></li>
                                    <li><OutboundLink content="Ruby on Rails (Ruby backend framework)" to="https://rubyonrails.org/" /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="donts-container">
                        <div className="row">
                            <div className="twelve columns">
                                <h3>I don't use ...</h3>
                            </div>
                        </div>
                        <div className="row">
                            <div className="six columns left-dont-columns">
                                <ul className="donts-list">
                                    <li>A CMS (content management system)</li>
                                    <li>Click and drag software</li>
                                </ul>
                            </div>
                            <div className="six columns right-dont-columns">
                                <ul className="donts-list">
                                    <li>Wordpress</li>
                                    <li>Squarespace</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </OpaqueContainer>
    )
}

export default Home;