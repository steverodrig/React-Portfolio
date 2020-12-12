import React from "react";

function Home() {

    return (
        <div className="container">
            <div>
                <img id="img" src="images/headshot.jpg" alt="Headshot" height="250px" width="250px" />
            </div>
            <main className="container">
                <div className="row main">
                    <div className="row">
                        <h1 className="buff">
                            &#9568; About Me &#9571;
                    </h1>
                    <hr className="margin"></hr>
                    </div>
                    
                    <div className="row">
                        <section className="buffmin">
                            I have been in the electronics maintenance and repair field for 20 years now. In the last 3 years I also
                            added diesel engine troubleshooting and repair to my repertoire. I am currently enrolled in a web development
                            boot camp learning several coding languages and full stack methodology in hopes of a possible career change.
                            Languages and technologies learned so far: HTML, CSS, Javascript, Node, Express, MySql, MongoDB, Handlebars.
                        </section>
                        <br></br>
                        <br></br>
                        <br></br>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;