export default function fetchAnimes() {
    return(dispatch) => {
        fetch("http://localhost/animes")
        .then(resp => resp.json())
        .then( (resp) => console.log(resp))
    }
}