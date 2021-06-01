import React, { Component } from 'react'
import AnimeCard from './AnimeCard'
import {connect} from 'react-redux'
import fetchAnimes from '../actions/fetchAnimes'

class AnimeContainer extends Component {
    // componentDidMount() {
    //     fetch("http://localhost:3000/animes")
    //     .then(resp => resp.json())
    //     .then(resp => console.log(resp))
    // } data is coming out perfectly

    render() {
        return (
            <div>
                hi. this is the animecontainer
            </div>
        )
    }
}

export default connect(null, {fetchAnimes})(AnimeContainer)

//holds anime cards
// fetch all anime