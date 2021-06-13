import React from 'react';
import self from '../../assets/images/ava-picture.jpg'

function About() {
    return (
        <section>
            <div className="columns is-mobile is-centered">
                <div className="column is-half is-offset-one-quarter">
                    <h1 className="title" id="about">
                        Welcome!
                        </h1>
                </div>
            </div>
            <div className="columns is-mobile">
                <div className="column is-three-fifths is-offset-one-fifth">
                    <div className="ava">
                        <a href="https://github.com/avamariee" target="_blank"><img src={self} style={{ width: "20%" }} alt="Selfie of Ava"/></a>
                        </div>
                    <p className="about">
                        Hello, and welcome to my portfolio! <br></br> My name is Ava Bullock, and I'm a Full Stack Web Developer.
                            <br></br>When I'm not coding up a storm, I enjoy playing story-driven video games, playing with my cats, and cooking!
                            <br></br>If you'd like to see the projects I've worked on, please select the "Portfolio" tab above!
                            I look forward to working with you. ♥
                        </p>
                </div>
            </div>
        </section>
    )
}

export default About;