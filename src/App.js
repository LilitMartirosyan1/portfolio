import React, {Component} from 'react';
import Header from "./Components/header/Header";
import About from "./Components/about/About";
import Footer from "./Components/footer/Footer";
import Homepage from "./Components/homepage/Homepage";
import Contact from "./Components/contact/Contact";
import Layout from "./Components/layout/Layout";

export default class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <Layout/>
                <Footer/>
            </div>
        );
    }
}

