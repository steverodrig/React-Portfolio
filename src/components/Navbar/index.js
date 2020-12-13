import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (

    <nav className="navbar navbar-dark bg-dark">
      <Link className="navbar-brand" to="/">
        Steven Rodriguez
      </Link>
      <button class="navbar-toggler hamburg" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
              </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
              </Link>
          </li>
          <li>
            <a className="nav-link" href="images/webdev resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </li>
        </ul>
      </div>
    </nav>


  );
}

export default Navbar;
