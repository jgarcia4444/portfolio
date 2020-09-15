import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectCard = ({project}) => {


    return (
        <div className="project-card container">
            <div className="row">
                <img className="project-card-img four columns" src={project.imgs[0]} alt={project.title + " Screen shot"} />
                <h4 className="project-card-title six columns">{project.title}</h4>
            </div>
            <div className="row">
                <p className="project-card-short">{project.short}</p>
                
            </div>
            <div className="row">
                <NavLink to={"projects/" + project.id}>
                    <button className="six columns">Project Page</button>
                </NavLink>
            </div>
            
        </div>
    )
}

export default ProjectCard;