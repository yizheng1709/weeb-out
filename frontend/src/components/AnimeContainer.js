import React, { Component } from 'react'
import AnimeCard from './AnimeCard'
import {connect} from 'react-redux'

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

//holds anime cards
// fetch all anime