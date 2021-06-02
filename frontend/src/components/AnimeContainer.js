import React, { Component } from 'react'
import AnimeCard from './AnimeCard'
import {connect} from 'react-redux'
import fetchAnimes from '../actions/fetchAnimes'
import '../stylesheets/anime-container.css'

class AnimeContainer extends Component {

    componentDidMount() {
        this.props.fetchAnimes()
    }

    render() {
        return (
            <div className="anime-grid">
                {this.props.animes && this.props.animes.map(anime => <AnimeCard key={anime.id} anime={anime}/> )}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return({
        animes: state.animes
    })
}

export default connect( mapStateToProps, {fetchAnimes} )(AnimeContainer)
