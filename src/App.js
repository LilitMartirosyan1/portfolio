import React, {Component} from 'react';
import {Header,Footer} from "./Nodes/Components";
import Routes from "./Nodes/routes"


export default class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <Routes/>
                <Footer/>
                {/*<Services/>*/}
            </div>
        );
    }
}

