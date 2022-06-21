import React from 'react';
import { projects } from '../data.js';
import { NavLink } from 'react-router-dom';
import '../styles/Home.css';

const {web, mobile} = projects;

const Home = (props) => {
    return (
        <div className="home">
            <div className="banner-bio">
                <div className="row">
                    {/* <div className="six columns">
                        <img id="portrait" src="imgs/portrait.png" alt="Jake Garcia" />
                    </div> */}
                    <div className="twelve columns">
                        <p id="quick-bio">
                            Welcome to my portfolio site! I am a full software developer. I build web and mobile applications because they often go hand in hand together. Here I am trying to showcase my projects that I have completed as well as showcase my skills growing.
                        </p>
                    </div>
                </div>
            </div>
            <hr></hr>
            <h2 id="projects-title">Projects Overview</h2>
            <div className="row" id="home-projects-container">
                {web.map(project => {
                    return (
                        <div key={project.id} className="six columns">
                            <h4 className="home-project-title">{project.title}</h4>
                            <p className="project-short">{project.short}</p>
                            <NavLink to={`/projects/${project.id}`}>
                                <img className="project-overview-imgs" src={project.imgs[0]} alt={project.title} />
                            </NavLink>
                            <div className="row project-btn-row">
                                <div className='to-project-btn'>
                                    <NavLink className="to-project-btn-text" to={`/projects/${project.id}`} >See full Project</NavLink>
                                </div>
                            </div>
                        </div>
                    )
                })}
                {mobile.map(project => {
                    return (
                        <div key={project.id} className="six columns">
                            <h4 className="home-project-title">{project.title}</h4>
                            <p className="project-short">{project.short}</p>
                            <NavLink to={`/projects/${project.id}`}>
                                <img className="project-overview-imgs" src={project.imgs[0]} alt={project.title} />
                            </NavLink>
                            <div className="row project-btn-row">
                                <div className='to-project-btn'>
                                    <NavLink className="to-project-btn-text" to={`/projects/${project.id}`} >See full Project</NavLink>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Home;