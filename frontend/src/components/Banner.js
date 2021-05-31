import React from 'react'
import logo from "../images/weebbanner.png"
import "../stylesheets/logo.css"
import '../stylesheets/universal.css'

export default function Banner() {
    return (
            <img src={logo} className="logo center-fit"></img>
    )
}
