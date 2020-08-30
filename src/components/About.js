import React from 'react';
import projects from '../data';

const About = (props) => {
    return (
        <div>
            <div className="row">
                <div className="twelve columns">
                    <img id="about-portrait" src="imgs/portrait.jpeg" alt="Jake Garcia" />
                </div>
            </div>
            <div className="row" id="about-name-social-row">
                <div id="about-name" className="six columns">
                    <h3>
                        Jake Garcia
                    </h3>
                </div>
                <div id="social-icons" className="six columns">
                    {projects.map(project => {
                        return (
                            <img className="social" src={project.imgs[0]} alt={project.title} width="36px" height="36px" />
                        )
                    })}
                </div>
            </div>
            
        </div>
    )
}

export default About;