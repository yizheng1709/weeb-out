import React, { Component } from 'react'
import CommentForm from './CommentForm'
import Review from './Review'
import '../stylesheets/reviews-box.css'

export default class ReviewsContainer extends Component {

    render() {
                
        return (
            <>
            <div className="center reviews-box">
                <h1 className="reviews-title">Reviews</h1>
                {this.props.comments && this.props.comments.map(
                    review => <Review key={review.id} review={review}/>
                )}
                <br/><br/><br/>
                <CommentForm />
                <br/><br/>
    
            </div>
                <br/><br/><br/><br/><br/><br/><br/><br/>
            </>
        )
    }
}
