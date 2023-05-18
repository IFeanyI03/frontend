import React from "react"
import { HashLink as Link } from 'react-router-hash-link'
import '../App.css';

export default function Nav() {

    return(
        <>
            <div className="time">
                <div className="t-holder">
                    <Link id="home-link" to="/#" title="Home" ></Link>
                    <Link id="bio-link" to="/#bio" title="Bio"></Link>
                    <Link id="skill-link" to="/#skills2" title="Skills"></Link>
                    <Link id="hire-link" to="/#hire" title="Hire"></Link>
                    <Link id="project-link" to="/#project" title="Project"></Link>
                    <Link id="footer-link" to="/#footer" title="Footer"></Link>
                </div>
            </div>
        </>
    )
}