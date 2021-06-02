import React, { Component } from 'react'
import CommentForm from './CommentForm'
import '../stylesheets/reviews-box.css'

export default class ReviewsContainer extends Component {
    render() {
        return (
            <>
            <div className="center reviews-box">
                <h1>Reviews</h1>
                <CommentForm />
    
            </div>
                <br/><br/><br/><br/><br/><br/><br/><br/>
            </>
        )
    }
}
