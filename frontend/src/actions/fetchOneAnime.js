export default function fetchOneAnime(animeId) {
    return(dispatch) => {
        fetch(`http://localhost:3000/animes/${animeId}`)
        .then(resp => resp.json())
        .then(anime => dispatch( {type: "FETCH_ONE_ANIME", payload: anime} ))
    }
}