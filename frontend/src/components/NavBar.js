import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylesheets/navbar.css'
import '../stylesheets/universal.css'

export default function NavBar() {
    return (
        <div className="navbar">
                < NavLink 
                
                to="/">
                    <span className="right-spacing nav-font">Home</span>
                </ NavLink >
                < NavLink 
               
                to="/animes">
                    <span className="right-spacing nav-font">All Animes</span>
                </ NavLink >
                < NavLink 
                
                to="/history">
                    <span className="right-spacing nav-font">Anime History</span>
                </ NavLink >
        </div>
    )
}
