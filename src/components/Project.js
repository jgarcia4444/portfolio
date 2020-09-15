import React from 'react';
import { projects } from '../data';

const Project = (props) => {
    const projectIndex = props.match.params.id - 1;
    const project = projects[projectIndex];
    return (
        <div className="project-container">
            <h1 className="project-title">{project.title} Project</h1>
            <p className="project-short">
                {project.short}
            </p>
            <hr />
            {project.imgs.map(img => {
                return <img className="project-imgs" key={img} src={`../${img}`} alt={project.title + " Screen shot."} />
            })}
            <hr />
            <a className="website-link" target="_blank" rel="noopener noreferrer" href={project.websiteUrl}>Visit Website</a>
            <div className="project-long">
                <p>
                   {project.long} 
                </p>
                
            </div>
        </div>
    );
}

export default Project;