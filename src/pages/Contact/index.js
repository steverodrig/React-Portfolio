import React from "react";
import { Component } from "react";
import Navbar from "../../components/Navbar";

class Contact extends Component {

componentDidMount() {
    const script = document.createElement("script");

    script.src = "https://platform.linkedin.com/badges/js/profile.js";
    script.type = "text/javascript";
    script.async = true;

    document.body.appendChild(script);
}

    render () {
    return (
        <div>
        <Navbar />
        <div className="container space">
            <div className="row mainTwo">
                <h1 class="buff2">
                    &#9568; Contact &#9571;
                </h1>
                <hr></hr>
            </div>
            
            <div className="mainTwo row">
                    <div class="LI-profile-badge margin" data-version="v1" data-size="medium" data-locale="en_US"
                        data-type="vertical" data-theme="dark" data-vanity="steven-rodriguez-029900135">
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    <address className="margin">
                        <a href="https://github.com/steverodrig">Github Profile</a><br />
                        <a href="mailto:sr_rodrig@yahoo.com">sr_rodrig@yahoo.com</a><br />
                        <a href="tel:+12104451428">(210) 445-1428</a>
                    </address>
                    <br></br>
                    <br></br>
                    <br></br>
            </div>
        </div>
        </div>
        
    )
    }
};

export default Contact;