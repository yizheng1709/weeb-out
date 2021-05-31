import React, { Component } from 'react'
import AnimeCard from './AnimeCard'
import {connect} from 'react-redux'
import fetchAnimes from '../actions/fetchAnimes'

export default class AnimeContainer extends Component {
    componentDidMount() {
        fetch("http://localhost:3000/animes")

    }
    render() {
        return (
            <div>
                
            </div>
        )
    }
}

export default connect(null, {fetchAnimes})(AnimeContainer)

//holds anime cards
// fetch all anime