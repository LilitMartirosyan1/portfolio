import React, {Component} from "react";
import "../../../assets/styles/components/header.scss"
import {NavLink} from "react-router-dom";

export default class Index extends Component {

    state = {
        menuToggle: "menu-toggle",
        classes: [],
        icon: "fas fa-bars",
        navBar: "",
        clicked: true
    }

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll)
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll)
    }

    handleScroll = () => {
        if (window.pageYOffset >130){
            this.setState({
                navBar:"nav-down"
            })
        }else{
            this.setState({
                navBar:"nav-up"
            })
        }
    }


    addId = () => {
        if (this.state.clicked === true) {
            this.state.classes.push("active-menu")
            this.setState({
                icon: "fas fa-times",
                clicked: false
            })
        } else {
            this.state.classes.splice("active-menu")
            this.setState({
                icon: "fas fa-bars",
                clicked: true
            })
        }
    }

    render() {
        return (
            <>
                <header className={this.state.navBar}>
                    <div className="nav-brand">Lilit's Portfolio</div>
                    <button className={this.state.menuToggle + " " + this.state.classes} onClick={this.addId}>
                        <i className={this.state.icon}/>
                    </button>
                    <nav>
                        <aside className="sidebar-wrapper">
                            <div className="sidebar-nav" id={this.state.classes[0]}>
                                <ul>
                                    <li>
                                        <NavLink to={"/"} exact onClick={this.addId}>Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/about"} onClick={this.addId}>About</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/services"} onClick={this.addId}>Services</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to={"/contact"} onClick={this.addId}>Contact</NavLink>
                                    </li>
                                </ul>
                            </div>
                            <div className="sidebar-bg" id={this.state.classes[0]}/>
                        </aside>
                    </nav>
                </header>
            </>
        )
    }
}