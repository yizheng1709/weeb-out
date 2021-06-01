export default function fetchAnimes() {
    return(dispatch) => {
        fetch("http://localhost/animes")
        .then(resp => resp.json())
        .then(animesArray => dispatch( {type: "FETCH_ANIMES", payload: animesArray}))
    }
}