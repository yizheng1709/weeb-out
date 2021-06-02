import React from 'react'
import AnimePage from './AnimePage'
import ReviewsContainer from './ReviewsContainer'
// import fetchOneAnime from '../actions/fetchOneAnime'
import { connect } from 'react-redux'
import '../stylesheets/universal.css'

class AnimePageContainer extends React.Component {

    // componentDidMount() {
    //     let id = this.props.match.params.id 
    //     this.props.animes.find(anime => anime.id === id) 
    // }

    findAnime() {
        let id = this.props.match.params.id
        this.props.animes.find(anime => anime.id === id) 
    }

    render() {
        // debugger
        let anime = this.props.animes.find(anime => anime.id === parseInt(this.props.match.params.id))
        // anime.id === this.props.match.params.id
        // debugger
        return (
            <div className="center-fit">
                <AnimePage anime={this.props.animes && anime} />
                <br/><br/>
                <ReviewsContainer comments={this.props.animes && anime.comments}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return({
        animes: state.animes
    })
}

export default connect(mapStateToProps)(AnimePageContainer)