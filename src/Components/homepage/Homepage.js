import React from "react";
import "./Homepage.scss"
import Skills from "./Skills";

export default function () {
    return (
        <>
            <div className="page-header">
                <div className="filter"/>
                <div className="container-header">
                    <h2>Stylish Portfolio</h2>
                    <div className="fog-low">
                        <img
                            src="https://demos.creative-tim.com/paper-kit-2-pro/assets/img/sections/fog-low.png"
                            alt="fog"/>
                    </div>
                    <h3>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
                </div>
                <div className="cloud"/>
            </div>
            <Skills/>
        </>
    )

}