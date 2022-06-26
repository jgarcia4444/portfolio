import React, {useState} from 'react';
import { projects } from '../data';
import OpaqueContainer from '../shared/OpaqueContainer';
import '../styles/Project.css';
import ImageModal from '../shared/ImageModal';

const Project = (props) => {
    const projectIndex = props.match.params.id - 1;
    const specificProjects = props.match.url.includes('web') ? projects.web : projects.mobile;
    const project = specificProjects[projectIndex];
    const [imageClickedUrl, setImageClickedUrl] = useState("");

    return (
        <OpaqueContainer>
            <div className="project-container">
                { imageClickedUrl !== "" &&
                    <ImageModal imgUrl={imageClickedUrl} closeModal={() => setImageClickedUrl('')} />
                }
                <h1 className="project-title">{project.title} Project</h1>
                <p className="project-short">
                    {project.short}
                </p>
                <div className="project-imgs-container">
                    {project.imgs.map(img => {
                        return (
                            <div onClick={() => setImageClickedUrl(`../../${img}`)} className="project-img-container">
                                <img className="project-imgs" key={img} src={`../../${img}`} alt={project.title + " Screen shot."} />
                            </div>
                            )
                    })}
                </div>
                
                <a className="website-link" target="_blank" rel="noopener noreferrer" href={project.websiteUrl}>Visit Website</a>
                <div className="project-long">
                    <p>
                        {project.long} 
                    </p>
                </div>
            </div>
        </OpaqueContainer>
    );
}

export default Project;