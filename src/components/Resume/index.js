import React from 'react';

function Resume() {

    return (
        <section className="section resume columns is-centered">
            <div>
                <h1 className="title resume">Resume</h1>
                <h2 className="subtitle">
                    Skills:
                    <ul>
                        <li><i class="fas fa-check-square"></i>HTML</li>
                        <li><i class="fas fa-check-square"></i>CSS</li>
                        <li><i class="fas fa-check-square"></i>JavaScript</li>
                        <li><i class="fas fa-check-square"></i>React</li>
                        <li><i class="fas fa-check-square"></i>Node.js</li>
                        <li><i class="fas fa-check-square"></i>Express.js</li>
                        <li><i class="fas fa-check-square"></i>MongoDB</li>
                        <li><i class="fas fa-check-square"></i>MySQL</li>
                        <li><i class="fas fa-check-square"></i>APIs</li>

                    </ul>
                    You can view my resume <a className="resume-anchor" href={require('../../assets/resume/Ava_Bullock_Resume.pdf').default} target="_blank" download>here.</a>
                </h2>
            </div>
        </section>
    )
}

export default Resume;