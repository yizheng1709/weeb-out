import React from 'react'
import {Route} from 'react-router-dom'
import choosing from '../images/choosing.gif'
import '../stylesheets/universal.css'
import '../stylesheets/homepage.css'

export default function HomePage() {
    return (
        <>
        <Route exact path="/home"></Route>
           <img src={choosing} alt="choosing" className="center-fit homepage"></img> 
        </>
    )
}
