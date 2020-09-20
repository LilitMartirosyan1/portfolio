import React from "react";
import "../../../assets/styles/pages/contact.scss"

export default function () {
    return (
        <>
            <div className="page-contact">
                <div className="container-contact">
                    <h2>Contact Me</h2>
                </div>
            </div>
            <div className="form-contact">
                <div className="form-container">
                    <form action="">
                        <input type="text" placeholder="Your name*"/>
                        <input type="email" placeholder="Email address*"/>
                        <input type="tel" placeholder="Phone*"/>
                        <textarea placeholder="Your message"/>
                        <div className="submit">
                            <input type="submit" value="send message"/>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}