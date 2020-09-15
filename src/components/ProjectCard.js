import React from 'react';

const ProjectCard = ({project}) => {


    return (
        <div className="project-card">
        <div className="card-top-row">
            <img className="project-card-img" src={project.imgs[0]} alt={project.title + " Screen shot"} />
            <h4 className="project-card-title">{project.title}</h4>
        </div>
            
            <p className="project-card-short">{project.short}</p>
        </div>
    )
}

export default ProjectCard;