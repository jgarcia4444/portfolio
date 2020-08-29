import React from 'react';
import projects from '../data.js';
const Home = (props) => {
    return (
        <div className="home">
            <h1 className="home-title">
                Welcome to my Portfolio Site!
            </h1>
            <div className="banner-bio">
                <div className="row">
                    <div className="four columns">
                        <img id="portrait" src="imgs/portrait.jpeg" alt="Jake Garcia" />
                    </div>
                    <div className="eight columns">
                        <p id="quick-bio">
                            Hi my name is Jake and i'll keep it short so you'll check out my about page. I have created this website to showcase my projects and create an online presence.
                        </p>
                    </div>
                </div>
            </div>
            <div className="row" id="home-projects-container">
                {projects.map(project => {
                    return (
                        <div className="six columns">
                            <h3>{project.title}</h3>
                            <p>{project.short}</p>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;