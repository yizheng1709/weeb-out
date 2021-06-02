import React from 'react'
import '../stylesheets/anime-page.css'
import '../stylesheets/universal.css'

export default function AnimePage(props) {
    return (
        <div className="responsive">
            <p className="title">{props.anime && props.anime.title}</p>
        <div className="center-fit page-grid">
            <img className="center cover page-cover" src={props.anime && props.anime.cover} alt="cover"></img>
            <div className="page-summary">
                <h1 className="center page-font big-font">Summary</h1>
                <p className="page-font page-small-font center">{props.anime && props.anime.summary}</p>
                <p className="center tags-title page-font">Genres & Warnings</p>
                <p className="center tags page-font">{props.anime && props.anime.tags}</p>
            </div>
        </div>
        </div>
    )
}

