import React,{useState,useEffect}from 'react'
import {useSelector,useDispatch} from "react-redux";
import {Header,Footer} from "./Nodes/Components"
import Routes from "./Nodes/routes"

export default function () {
    // const state = useSelector(store => store.scroll)
    // const dispatch = useDispatch()
    //
    // const Scroll = (e)=>{
    //     dispatch({
    //         type:"INCREMENT_SCROLL_SIZE",
    //         payload:e.target.documentElement.scrollTop
    //     })
    // }
    //
    // useEffect(()=>{
    //     window.addEventListener("scroll", Scroll)
    // })


    // console.log(state,7777)
    return (
        <div className="App" >
            <Header/>
            <Routes />
            <Footer/>
            {/*<Services/>*/}
        </div>
    )

}

