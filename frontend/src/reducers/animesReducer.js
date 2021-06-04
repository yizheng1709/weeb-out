export default function animesReducer (state = {animes: [] }, action) {
    //reducer is automaticallly passed the previous state
    //the initial state is only needed to prevent the error from the initial render
    switch(action.type){
        case "ADD_REVIEW":
            const updatedAnime = state.animes.find(anime => anime.id === action.payload.anime_id) 
            updatedAnime.comments = [...updatedAnime.comments, action.payload] 
            return {animes: state.animes.map(anime => anime.id === updatedAnime.id ? updatedAnime : anime)} 
        case "FETCH_ANIMES":
            return {animes: action.payload}
        default:
            return state 
    }
}