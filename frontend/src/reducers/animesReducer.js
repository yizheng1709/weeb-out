export default function animesReducer (state = {animes: [] }, action) {
    console.log(state, "in animes reducers")
    //reducer is automaticallly passed the previous state
    //the initial state is only needed to prevent the error from the initial render
    switch(action.type){
        case "ADD_REVIEW":
            return(state)
        case "FETCH_ANIMES":
            return {animes: action.payload}
        default:
            return state 
    }
}