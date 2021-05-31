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
                    Home
                </ NavLink >
                < NavLink 
               
                to="/animes">
                    All Animes
                </ NavLink >
                
            </div>
        )
    }
}

export default NavBar