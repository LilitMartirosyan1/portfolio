const initialState = 0;

export default (state = initialState,action) =>{
    switch (action.type) {
        case "INCREMENT_SCROLL_SIZE":
            return {...state,scroll:action.payload}
        default: return state
    }
}
