import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/ProjectOverview.css';

const ProjectOverview = ({project, isWeb}) => {

    const configuredUrl = isWeb === true ? '/projects/web/' : 'projects/mobile/';

    return (
        <div key={project.id} className="six columns">
            <h4 className="home-project-title">{project.title}</h4>
            <p className="project-short">{project.short}</p>
            <NavLink to={`${configuredUrl}${project.id}`}>
                <img className="project-overview-imgs" src={project.imgs[0]} alt={project.title} />
            </NavLink>
            <div className="row project-btn-row">
                <div className='to-project-btn'>
                    <NavLink className="to-project-btn-text" to={`${configuredUrl}${project.id}`} >See full Project</NavLink>
                </div>
            </div>
        </div>
    )
}

export default ProjectOverview;