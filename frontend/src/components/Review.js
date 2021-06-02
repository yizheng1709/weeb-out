import React from 'react'
import '../stylesheets/review.css'

export default function Review(props) {
    return (
        <div className="review">
            <p className="user">{props.review.name}</p>
            <p className="content">{props.review.content}</p>
        </div>
    )
}
