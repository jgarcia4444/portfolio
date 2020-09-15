import React from 'react';
import { projects } from '../data';
import ProjectCard from './ProjectCard';

const Projects = () => {
    return (
        <div>
            <h1>
                Projects
            </h1>
        {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
    )
}

export default Projects;