export default function addReview (review) {
    return (dispatch) => {
        fetch(`http://localhost:3000/animes/${review["anime_id"]}`, {
            method: "POST",
            headers: {Accept: "application/json", "Content-Type": "application/json"},
            body: JSON.stringify( {anime: review})
        }).then(resp => resp.json())
        .then(review => dispatch({ type: "ADD_REVIEW", payload: review}))

    }
}