import React from 'react';
import photo from "../../assets/images/dogs-vs-cats.JPG"

function Projects(props){

    const currentProject = {
        name: 'first project',
        description: 'this is the first project'
    }
    return(
        <section>
            <h1>{currentProject.name}</h1>
            <p>{currentProject.description}</p>
            <div>
                <img 
                src={photo}
                alt='Screenshot of the project.'
                className='images'
                >

                </img>
            </div>
        </section>
    )
}

export default Projects;