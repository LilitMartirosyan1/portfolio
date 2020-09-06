import React from "react";
import {Route,Redirect} from "react-router-dom"
import Homepage from "../homepage/Homepage";
import About from "../about/About";
import Contact from "../contact/Contact";

export default () => {
    return (
        <>
            <Route path={"/"} exact component={Homepage}/>
            <Route path={"/about"} component={About}/>
            {/*<Route path={"/services"}component={}/>*/}
            <Route path={"/contact"}component={Contact}/>
            <Redirect to={"/"}/>
        </>
    )
}