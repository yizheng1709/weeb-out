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
        let cards = this.props.animes.map(anime => <AnimeCard anime={anime}/> )
        return (
            <div>
                hi. this is the animecontainer
                
            </div>
        )
    }
}

const mapStateToProps = state => {
    return({
        animes: state.animes
    })
}

export default connect(mapStateToProps, {fetchAnimes})(AnimeContainer)

//holds anime cards
// fetch all anime