import React from 'react'
import AnimePage from './AnimePage'
import ReviewsContainer from './ReviewsContainer'
import { connect } from 'react-redux'
import '../stylesheets/universal.css'
import { Redirect } from 'react-router'

class AnimePageContainer extends React.Component {

    findAnime() {
        let id = this.props.match.params.id
        this.props.animes.find(anime => anime.id === id) 
    }

    render() {

        let anime = this.props.animes.find(anime => anime.id === parseInt(this.props.match.params.id))

        if (!anime) {
            debugger
            this.props.history.push('/animes')
            alert("Please allow the animes to load :)")
        }
 
        return (
            <div className="center-fit">
                <AnimePage anime={this.props.animes && anime} />
                <br/><br/>
                <ReviewsContainer comments={anime && anime.comments}/>
                
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