import React from 'react'
import { NavLink } from 'react-router-dom'
import '../stylesheets/navbar.css'

class NavBar extends React.Component {

    render() {
        return(
            <div className="navbar">
                < NavLink 
                style={{ marginRight: '10px' }}
                to="/">
                    Home
                </ NavLink >
                < NavLink 
                style={{ marginRight: '10px' }}
                to="/animes">
                    All Animes
                </ NavLink >
                
            </div>
        )
    }
}

export default NavBar