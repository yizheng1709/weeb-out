export default function fetchAnimes() {
    return(dispatch) => {
        fetch("http://localhost:3000/animes")
        .then(resp => resp.json())
        .then(animesArray => dispatch( {type: "FETCH_ANIMES", payload: animesArray}))
    }
}