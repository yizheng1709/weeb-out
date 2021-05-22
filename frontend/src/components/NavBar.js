import React from 'react'
import { NavLink } from 'react-router-dom'

class NavBar extends React.Component {

    render() {
        return(
            <div>
                < NavLink 
                style={{ marginRight: '10px' }}
                to="/">
                    Home
                </ NavLink >
                < NavLink 
                style={{ marginRight: '10px' }}
                to="/movies">
                    Logout
                </ NavLink >
                
            </div>
        )
    }
}

export default NavBar