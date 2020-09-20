import React from "react";
import {Route,Redirect} from "react-router-dom"
import {Homepage,About,Contact} from "../pages";

export default () => {
    return (
        <>
            <Route path={"/"} exact >
                <Homepage/>
            </Route>
            <Route path={"/about"} component={About}/>
            {/*<Route path={"/services"}component={}/>*/}
            <Route path={"/contact"}component={Contact}/>
            <Redirect to={"/"}/>
        </>
    )
}