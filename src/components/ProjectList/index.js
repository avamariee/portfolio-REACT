import React from 'react'

import DogsVsCats from '../../assets/images/dogs-vs-cats.JPG'
import JustMyType from '../../assets/images/just-my-type.JPG'
import WeatherDashboard from '../../assets/images/weather-dashboard.jpg'
import YourFavTech from '../../assets/images/your-fav-tech-blog.JPG'
import WorkDayScheduler from '../../assets/images/work-day-scheduler.jpg'
function ProjectList() {

  
    return (
        <div className="images">
            <img
                src={DogsVsCats}
                alt="A quiz website to see if you are a dog or a cat person, complete with facts about pet adoptions, and adoption links."
            />
            <img
                src={JustMyType}
                alt="Example"
            />
            <img
                src={WeatherDashboard}
                alt="Example"
            />
            <img
                src={YourFavTech}
                alt="Example"
            />
             <img
                src={WorkDayScheduler}
                alt="Example"
            />
            
        </div>
    )
}


export default ProjectList;