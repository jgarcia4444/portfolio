import React, {useState} from 'react';
import { projects } from '../data';
import ProjectOverview from './ProjectOverview';
import '../styles/Projects.css';

const {web, mobile} = projects;

const Projects = () => {

    const [showWebApps, setShowWebApps] = useState(true);

    const renderProjects = () => {
        return showWebApps === true ?
            web.map(webProject => <ProjectOverview isWeb={showWebApps} key={webProject.id} project={webProject} />)
            :
            mobile.map(mobileProject => <ProjectOverview isWeb={showWebApps} key={mobileProject.id} project={mobileProject} />)
    }

    return (
        <div>
            <h1>
                Projects
            </h1>
            <div className="switch-projects-type-row">
                <div className="switch-projects-type-container">
                    <div onClick={() => setShowWebApps(true)} style={{backgroundColor: showWebApps === true ? 'black' : 'transparent', color: showWebApps === true ? 'white' : 'black'}} className="switch-tab web-switch-tab">Web</div>
                    <div onClick={() => setShowWebApps(false)} style={{backgroundColor: showWebApps === false ? 'black' : 'transparent', color: showWebApps === false ? 'white' : 'black'}} className="switch-tab mobile-switch-tab">Mobile</div>
                </div>
            </div>
        {renderProjects()}
        </div>
    )
}

export default Projects;