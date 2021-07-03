import React from 'react'

import DogsVsCats from '../../assets/images/dogs-vs-cats.JPG'
import JustMyType from '../../assets/images/just-my-type.JPG'
import ZeroStars from '../../assets/images/zerostars.JPG'
import YourFavTech from '../../assets/images/your-fav-tech-blog.JPG'
import WorkDayScheduler from '../../assets/images/work-day-scheduler.jpg'
import PizzaHunt from '../../assets/images/pizza-hunt.JPG'

function ProjectList() {


    return (
        <div className="images is-fullwidth">
            <div className="columns">
                <div className="column is-half ">
                    <h2 className="port-title is-centered">Pet Adoption Quiz</h2>
                    <a className="image is-3by1" href="https://avamariee.github.io/pet-adoption-quiz/" target="_blank" rel="noreferrer">
                        <img
                            src={DogsVsCats}
                            alt="A quiz website to see if you are a dog or a cat person, complete with facts about pet adoptions, and adoption links."
                        />
                    </a>
                </div>
                <div className="column is-half">
                    <h2> Just My Type </h2>
                    <a className="image is-3by1" href="https://stark-depths-18071.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img
                            src={JustMyType}
                            alt="A typing game website where the user can test their typing skills."
                        />
                    </a>
                </div>
            </div>
            <div className="columns">
                <div className="column is-half">
                    <h2> Pizza Hunt </h2>
                    <a className="image is-3by1" href="https://frozen-savannah-71044.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img
                            src={PizzaHunt}
                            alt="A website where the user can create pizza recipes, and comment on other users' recipes."
                        />
                    </a>
                </div>
                <div className="column is-half">
                    <h2> Zero Stars </h2>
                    <a className="image is-3by1" href="https://zero-stars-8.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img
                            src={ZeroStars}
                            alt="A website that is essentially a backwards yelp, showcasing terrible reviews."
                        />
                    </a>
                </div>
            </div>

            <div className="columns">
                <div className="column is-half">
                    <h2> Your Favorite Tech Blog </h2>
                    <a className="image is-3by1" href="https://pacific-escarpment-48422.herokuapp.com/" target="_blank" rel="noreferrer">
                        <img
                            src={YourFavTech}
                            alt="A fictional tech blog."
                        />
                    </a>
                </div>
                <div className="column is-half">
                    <h2> Work Day Scheduler </h2>
                    <a className="image is-3by1" href="https://avamariee.github.io/work-day-scheduler/" target="_blank" rel="noreferrer">
                        <img
                            src={WorkDayScheduler}
                            alt="An application used to schedule a standard 8 hour work day."
                        />
                    </a>
                </div>
            </div>


        </div>
    )
}


export default ProjectList;