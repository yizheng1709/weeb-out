import React from 'react'
import '../stylesheets/anime-page.css'
import '../stylesheets/universal.css'

export default function AnimePage(props) {
    return (
        <>
            <p className="title">{props.anime.title}</p>
        <div className="center-fit page-grid">
            <img className="center cover" src={props.anime.cover}></img>
            <div className="page-summary">
                <h1 className="center page-font big-font">Summary</h1>
                <p className="page-font page-small-font center">{props.anime.summary}</p>
                <p className="center tags-title page-font">Genres & Warnings</p>
                <p className="center tags page-font">{props.anime.tags}</p>
            </div>
        </div>
        </>
    )
}

