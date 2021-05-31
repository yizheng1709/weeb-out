import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylesheets/navbar.css'
import '../stylesheets/universal.css'

class NavBar extends React.Component {

    render() {
        return(
            <div className="navbar">
                < NavLink 
                
                to="/">
                    <span className="right-spacing nav-font">Home</span>
                </ NavLink >
                < NavLink 
               
                to="/animes">
                    <span className="right-spacing nav-font">All Animes</span>
                </ NavLink >
                
            </div>
        )
    }
}

export default NavBar