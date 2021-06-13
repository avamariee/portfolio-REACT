import React from 'react';
import ProjectList from '../ProjectList';

function Projects(currentProject){

    const { name, description } = currentProject;
    return(
        <section>
            <h1>{name}</h1>
            <p>{description}</p>
            <ProjectList>
                
            </ProjectList>
        </section>
    )
}

export default Projects;