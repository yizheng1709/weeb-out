import React from 'react'
import '../stylesheets/anime-card.css'
import '../stylesheets/universal.css'
import { NavLink } from 'react-router-dom'

export default function AnimeCard(props) {

    return (
        <NavLink to={`/animes/${props.anime.id}`}>
            <div className="flip-card center-fit">
                <div className="flip-card-inner">
                    <div className="flip-card-front">
                        <img src={props.anime.cover} className="anime-card flip" alt={props.anime.title}></img>
                    </div>
                    <div class="flip-card-back">
                        <div className="limit-text">
                            <p className="back-side-font">{props.anime.title}</p>
                        </div>
                    </div>  
                </div>
            </div>
        </NavLink>
    )
}
