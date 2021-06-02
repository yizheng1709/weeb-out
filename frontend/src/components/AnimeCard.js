import React from 'react'
import '../stylesheets/anime-card.css'
import '../stylesheets/universal.css'

export default function AnimeCard(props) {

    return (
        <div className="flip-card center-fit">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={props.anime.cover} className="anime-card flip" ></img>
                </div>
                <div class="flip-card-back">
                    <div className="limit-text">
                        <p className="back-side-font">{props.anime.title}</p>
                    </div>
                </div>  
            </div>
        </div>
    )
}
