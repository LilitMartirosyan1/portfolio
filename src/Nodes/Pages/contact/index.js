import React from "react";
import "../../../assets/styles/pages/contact.scss"

export default function () {
    return (
        <div className="page-contact">
            <div className="container-contact">
                <form action="">
                    <div className="row">
                        <div className="form-left">
                            <input type="text" placeholder="Your Name*"/>
                            <input type="email" placeholder="Your Email*"/>
                            <input type="tel" placeholder="Your Phone*"/>
                        </div>
                        <div className="form-right">
                            <textarea placeholder="Your Message*"/>
                        </div>
                    </div>
                    <div className="submit">
                        <input type="submit" value="send message"/>
                    </div>

                </form>
            </div>
        </div>
    )
}