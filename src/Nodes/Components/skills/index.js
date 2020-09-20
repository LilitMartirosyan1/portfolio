import React, {Component} from "react";
import "../../../assets/styles/components/header.scss"


export default class Skills extends Component {
    state = {
        skills: [
            {id: 0, skillsName: "HTML5", level: 90, time: 0, seconds: 20},
            {id: 1, skillsName: "CSS3", level: 80, time: 0, seconds: 15},
            {id: 2, skillsName: "SCSS", level: 70, time: 0, seconds: 25},
            {id: 3, skillsName: "Bootstrap4", level: 90, time: 0, seconds: 20},
            {id: 4, skillsName: "JQuery", level: 90, time: 0, seconds: 25},
            {id: 5, skillsName: "Javascript", level: 75, time: 0, seconds: 30},
            {id: 6, skillsName: "React.js", level: 80, time: 0, seconds: 15},
            {id: 7, skillsName: "Redux", level: 70, time: 0, seconds: 25},
        ]
    }

    componentDidMount() {
            this.state.skills.map((e) => {
                const interval = setInterval(() => {
                    if (e.time === e.level) {
                        clearInterval(interval)
                    } else this.setState({
                        time: ++e.time
                    })
                }, e.seconds)
            })
    }

    render() {
        return (
            <div className="skill">
                {
                    this.state.skills.map((e, index) => {
                        return (
                            <div className="skill-body" key={e.id}>
                                <p>{e.skillsName}</p>
                                <div className='skill_item_body'>
                                    <div className='skill_item' style={{width: `${e.time}%`}}/>
                                </div>
                                <p className='skills-percent'>{e.time}%</p>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}

