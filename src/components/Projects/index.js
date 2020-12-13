import React from "react";

function Projects(props) {

    return (
        
        <div className="card prof col-5">
            <img alt={props.name} src={props.image} class="card-img-top"></img>

            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <a href={props.deployed} class="card-link" target="_blank" rel="noreferrer">Deployed version</a><br></br>
                <a href={props.repo} class="card-link" target="_blank" rel="noreferrer">Github repository</a>
            </div>
        </div>    
    );
}

export default Projects;