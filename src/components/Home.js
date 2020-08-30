import React from 'react';
import projects from '../data.js';
import { NavLink } from 'react-router-dom';
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
            <h2>Projects Overview</h2>
            <div className="row" id="home-projects-container">
                {projects.map(project => {
                    return (
                        <div className="six columns">
                            <h3>{project.title}</h3>
                            <p className="project-short">{project.short}</p>
                            <NavLink to={`/projects/${project.id}`}>
                                <img className="project-overview-imgs" src={project.imgs[0]} alt={project.title} />
                            </NavLink>
                            <div className="row">
                                <NavLink className="to-project-btn" to={`/projects/${project.id}`} >See full Project</NavLink>
                            </div>
                            
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;