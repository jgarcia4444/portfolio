import React from 'react';
import { projects } from '../data';

const Project = (props) => {
    const projectIndex = props.match.params.id - 1;
    const project = projects[projectIndex];
    return (
        <div className="project-container">
            <h1 className="project-title">{project.title} Project</h1>
            {project.imgs.map(img => {
                return <img className="project-imgs" key={img} src={`../${img}`} alt="Covid 19 Website Screen Shot" />
            })}
        </div>
    );
}

export default Project;