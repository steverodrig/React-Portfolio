import React, { Component } from "react";
import Projects from "../../components/Projects";
import projects from "../../projects.json";
import Navbar from "../../components/Navbar";

class Portfolio extends Component {

    state = {
        projects
    };

render() {

    return (
        <div>
        <Navbar />
        <div className="container space main">
            <div className="row">
                <h1 className="buff">
                &#9568; Portfolio &#9571;
                </h1>
            </div>
            <hr></hr>
            <div className="row">
            {this.state.projects.map(project => (
                <Projects
                    key={project.id}
                    name={project.name}
                    image={project.image}
                    deployed={project.deployed}
                    repo={project.repo}
                />
            ))}
            </div>
            <br></br>
            <br></br>
            <br></br>
        </div>
        </div>
    )
};
}
export default Portfolio;