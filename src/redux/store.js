import {combineReducers} from "redux"
import reducer from "./reducer/reducer";
import header from "./reducer/header"
import skills from "./reducer/skill";
export default combineReducers({
    reducer,
    header,
    skills
})