export default function addReview (review) {
    return (dispatch) => {
        // debugger
        fetch(`http://localhost:3000/animes/${review["anime_id"]}/comments`, {
            method: "POST",
            headers: {Accept: "application/json", "Content-Type": "application/json"},
            body: JSON.stringify( {comment: review})
        }).then(resp => resp.json())
        .then(review => dispatch({ type: "ADD_REVIEW", payload: review}))

    }
}