const  skillState = {
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
 const skills = (state=skillState,action)=>{
    switch (action.type) {
        case "CHANGE_SKILLS_TIME": return {...state,skills: action.value

        }
    }
    return skillState
 }
 export default skills