import React from "react";

function Portfolio() {

    return (
        <div className="container space main">
            <div className=" row">
                <h1 className="buff">
                &#9568; Portfolio &#9571;
                </h1>
                
            </div>
            <hr></hr>
            <div className=" row">
                <div className="card prof col">
                    <img src="images/weather (1).png" class="card-img-top" alt="Weather Dashboard Page"></img>
                    <div class="card-body">
                    <h5 class="card-title">Weather Dashboard</h5>
                    <a href="https://steverodrig.github.io/HW-7-Weather-Dashboard/" class="card-link"
                        target="_blank" rel="noreferrer">Deployed version</a>
                        <br></br>
                    <a href="https://github.com/steverodrig/HW-7-Weather-Dashboard" class="card-link"
                        target="_blank" rel="noreferrer">Github repository</a>
                    </div>
                </div>
                <div className="card prof col">
                    <img src="images/scheduler (1).png" class="card-img-top" alt="Scheduler"></img>
                    <div class="card-body">
                    <h5 class="card-title">Work Day Scheduler</h5>
                    <a href="https://steverodrig.github.io/HW-5-Work-Day-Scheduler/" class="card-link"
                        target="_blank" rel="noreferrer">Deployed version</a>
                        <br></br>
                    <a href="https://github.com/steverodrig/HW-5-Work-Day-Scheduler" class="card-link"
                        target="_blank" rel="noreferrer">Github repository</a>
                    </div>
                </div>
            </div>
            <div className=" row">
                <div className="card prof col">
                    <img src="https://camo.githubusercontent.com/2d649f7bb0c7370cc8baf022c02b535c613fe888/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f654d6247346a6e6c3570314d4f325a5762622f67697068792e676966" class="card-img-top" alt="Night In"></img>
                    <div class="card-body">
                    <h5 class="card-title">Night In</h5>
                    <a href="https://cascutter.github.io/Project-1-Night-In/" class="card-link"
                        target="_blank" rel="noreferrer">Deployed version</a>
                        <br></br>
                    <a href="https://github.com/cascutter/Project-1-Night-In" class="card-link"
                        target="_blank" rel="noreferrer">Github repository</a>
                    </div>
                </div>
                <div className="card prof col">
                    <img src="images/Burger (1).png" class="card-img-top" alt="Burger Muncher"></img>
                    <div class="card-body">
                    <h5 class="card-title">Burger Muncher</h5>
                    <a href="https://burgermunchout.herokuapp.com/" class="card-link"
                        target="_blank" rel="noreferrer">Deployed version</a>
                        <br></br>
                    <a href="https://github.com/steverodrig/burger" class="card-link"
                        target="_blank" rel="noreferrer">Github repository</a>
                    </div>
                </div>
            </div>
            <div className=" row">
                <div className="card prof col">
                    <img src="images/samswap.png" class="card-img-top" alt="Samurai Swapmeet"></img>
                    <div class="card-body">
                    <h5 class="card-title">Samurai Swapmeet</h5>
                    <a href="https://samuraiswapmeet.herokuapp.com/" class="card-link"
                        target="_blank" rel="noreferrer">Deployed version</a>
                        <br></br>
                    <a href="https://github.com/rendod99/Project_2" class="card-link"
                        target="_blank" rel="noreferrer">Github repository</a>
                    </div>
                </div>
                <div className="card prof col">
                    <img src="images/wrkout.png" class="card-img-top" alt="Workout Dashboard"></img>
                    <div class="card-body">
                    <h5 class="card-title">Fitness Tracker</h5>
                    <a href="https://glacial-ravine-32252.herokuapp.com/?id=5fb5a1f4b55852001769b32d" class="card-link"
                        target="_blank" rel="noreferrer">Deployed version</a>
                        <br></br>
                    <a href="https://github.com/steverodrig/Fitness-Tracker" class="card-link"
                        target="_blank" rel="noreferrer">Github repository</a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Portfolio;