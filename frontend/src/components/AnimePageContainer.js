import React from 'react'
import AnimePage from './AnimePage'
import CommentForm from './CommentForm'

export default function AnimePageContainer() {
    return (
        <div>
            this is the anime page container
            <AnimePage />
            <CommentForm />
        </div>
    )
}

// should have a section for the anime
// should have a container to hold reviews 