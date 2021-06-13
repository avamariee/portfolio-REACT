import React from 'react'

import DogsVsCats from '../../assets/images/dogs-vs-cats.JPG'
import JustMyType from '../../assets/images/just-my-type.JPG'
import WeatherDashboard from '../../assets/images/weather-dashboard.jpg'
import YourFavTech from '../../assets/images/your-fav-tech-blog.JPG'
import WorkDayScheduler from '../../assets/images/work-day-scheduler.jpg'

function ProjectList() {

  
    return (
        <div className="images">
           <div>
               <a href="https://avamariee.github.io/pet-adoption-quiz/" target="_blank">
                <img
                    src={DogsVsCats}
                    alt="A quiz website to see if you are a dog or a cat person, complete with facts about pet adoptions, and adoption links."
                />
                </a>
           </div>
            <div>
            <a href="https://stark-depths-18071.herokuapp.com/" target="_blank">
                <img
                    src={JustMyType}
                    alt="Example"
                />
                </a>
            </div>
            <div>
            <a href="https://avamariee.github.io/weather-dashboard/" target="_blank">
                <img
                    src={WeatherDashboard}
                    alt="Example"
                />
                </a>
            </div>
            <div>
            <a href="https://pacific-escarpment-48422.herokuapp.com/" target="_blank">
                <img
                    src={YourFavTech}
                    alt="Example"
                />
                </a>
            </div>
             <div>
             <a href="https://avamariee.github.io/work-day-scheduler/" target="_blank">
                 <img
                    src={WorkDayScheduler}
                    alt="Example"
                />
                </a>
             </div>
            
        </div>
    )
}


export default ProjectList;