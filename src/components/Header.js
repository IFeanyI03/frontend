import React from "react"
// import { Link } from "react-router-dom"
import '../App.css';
import arrow from '../pictures/005-right-arrow-w.png'
import twitter from '../pictures/001-twitter-w.png'
import linkedin from '../pictures/002-linkedin-w.png'
import github from '../pictures/003-github-w.png'
import mail from '../pictures/004-mail-w.png'



export default function Header() {
    return (
        <>
            <div className="logo-holder">
                <div className="logo">
                    <img alt="img" src={arrow}></img>
                    <h1>Buildwith.me</h1> 
                    <img alt="img" src={arrow}></img>
                </div>
            </div>

            <nav>
                <header content="">
                    <a href="https://twitter.com/IfeanyiAghasili?t=Q4au6EpNDDp0LgmXGd4jNA&s=09"><img alt="" src={twitter}></img></a>  
                    <a href="https://www.linkedin.com/in/ifeanyi-aghasili-41071923a"><img alt="" src={linkedin}></img></a>
                    <a href="https://github.com/IFeanyI03"><img alt="" src={github}></img></a>   
                    <a href="mailto:ifeanyiaghasili@gmail.com"><img alt="" src={mail}></img></a> 
                </header>
            </nav>
        </>
    )
}