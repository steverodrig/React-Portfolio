import React from "react";

function Contact() {

    return (
        <div className="container space">
            <div className="main row">
                <h1 class="buff">
                    &#9568; Contact &#9571;
            </h1>
                <hr class="margin"></hr>
            </div>
            <div className="main form-group row">
                <div className="col-md-6">
                    <form className="margin">
                        <div>
                            <label for="inputName">Name</label>
                            <input type="text" className="form-control" placeholder="Name"></input>
                        </div>
                        <div class="mb-3">
                            <label for="validationTextarea">Message</label>
                            <textarea type="text" class="form-control" placeholder="Type message here"></textarea>
                        </div>
                    </form>
                    <div class="row bt">
                        <button type="button" class=" btn btn-primary btn-lg margin">Submit</button>
                    </div>
                </div>
                <div className="col-md-6">
                    <div class="LI-profile-badge margin" data-version="v1" data-size="medium" data-locale="en_US"
                        data-type="vertical" data-theme="dark" data-vanity="steven-rodriguez-029900135">
                    </div>
                    <address className="margin">
                        <a href="https://github.com/steverodrig">Github Profile</a><br />
                        <a href="mailto:sr_rodrig@yahoo.com">sr_rodrig@yahoo.com</a><br />
                        <a href="tel:+12104451428">(210) 445-1428</a>
                    </address>
                </div>
            </div>
        </div>

    )
};

export default Contact;