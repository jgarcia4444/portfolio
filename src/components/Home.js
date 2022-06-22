import React, {useEffect, useState} from 'react';
import { projects } from '../data.js';
import '../styles/Home.css';
import ProjectOverview from './ProjectOverview/index.js';
import OpaqueContainer from '../shared/OpaqueContainer/index.js';

const {web, mobile} = projects;





const Home = (props) => {

    const [opacityVal, setOpacityVal] = useState(0);

    return (
        <OpaqueContainer>
            <div className="home">
                <div className="banner-bio">
                    <div className="row">
                        <div className="twelve columns">
                            <p id="quick-bio">
                                Welcome to my portfolio site! I am a full software developer. I build web and mobile applications because they often go hand in hand together. Here I am trying to showcase my projects that I have completed as well as showcase my skills growing.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <h2 id="projects-title">Projects Overview</h2>
                <div className="row" id="home-projects-container">
                    {web.map(project => {
                        return (
                            <ProjectOverview key={`web-${project.id}`} project={project} />
                        )
                    })}
                    {mobile.map(project => {
                        return (
                            <ProjectOverview key={`mobile-${project.id}`} project={project} />
                        )
                    })}
                </div> */}
            </div>
        </OpaqueContainer>
    )
}

export default Home;