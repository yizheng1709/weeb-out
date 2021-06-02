export default function animesReducer (state = {animes: [], anime: [] }, action) {
    console.log(state, "in animes reducers")
    //reducer is automaticallly passed the previous state
    //the initial state is only needed to prevent the error from the initial render
    switch(action.type){
        case "ADD_REVIEW":
            return(state)
        case "FETCH_ANIMES":
            return {animes: action.payload}
        case "FETCH_ONE_ANIME":
            return {anime: action.payload}
        default:
            return state 
    }
}