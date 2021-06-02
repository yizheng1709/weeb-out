import React from 'react'
import AnimePage from './AnimePage'
import ReviewsContainer from './ReviewsContainer'
import fetchOneAnime from '../actions/fetchOneAnime'
import { connect } from 'react-redux'
import '../stylesheets/universal.css'

class AnimePageContainer extends React.Component {

    componentDidMount() {
        let id = this.props.match.params.id
        this.props.fetchOneAnime(id)
    }

    render() {
        return (
            <div className="center-fit">
                <AnimePage anime={this.props.anime} />
                <br/><br/>
                <ReviewsContainer />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return({
        anime: state.anime
    })
}

export default connect(mapStateToProps, {fetchOneAnime} )(AnimePageContainer)