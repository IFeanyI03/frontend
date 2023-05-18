import React from "react"
import { HashLink as HLink } from 'react-router-hash-link'
import { Link } from "react-router-dom";
import '../App.css';
import resume from '../files/Ifeanyi Aghasili resume.pdf'

export default function Bio({ prop, visible, prop2, visible2 }) {
    return (
        <>
            <section ref={prop} id="bio" className={ visible ? "section showing" : "section"}>
            
                <div className="quote">
                    <div className='img'></div>
                    <p>I am a passionate developer dedicated to facing challenges head-on and has experienced first-hand the transformational power of online learning.</p>
                    <p>I like the challenge of finding and fixing code bugs that may hinder the free flow of code giving the users a more enjoyable and stress-free user experience.</p>
                    <div className='img'></div>
                </div>
                <div className="btn2">
                    <HLink to="#skills2" id="skbtn"><button><p>Skills</p></button></HLink>
                    <HLink to="#project" id="probtn"><button><p>Projects</p></button></HLink>
                    <a href={resume} download={'Ifeanyi_ghsili_resume'}><button><p>Resume</p></button></a>
                    <Link to="designs"><button><p>Designs</p></button></Link>
                </div>
                <div>
                </div>

            </section> 

            <div className="bio-grid" >
                    <div ref={prop2}  className={ visible2 ? "section showing2" : "section"}>
                    <h2 className="underlineTxt">
                            Currently
                        </h2>
                        <br />
                        <p className="color">Studing to get my BSc. in Computer Science, improving my skill set and getting familliar with my stack</p> </div>
                    <div ref={prop2}  className={ visible2 ? "section showing2" : "section"}>
                        <h2 className="underlineTxt">
                            Goal
                        </h2>
                        <br />
                        <p className="color">My goal as a web developer is to contribute as much as I can to taking web applications to the next level</p>
                    </div>
                    <div ref={prop2}  className={ visible2 ? "section showing2" : "section"}>
                        <h2 className="underlineTxt">My stack</h2>
                        <br />
                        <ul>
                            <li><span className="color" >Frontend:</span> React.js</li>
                            <li><span className="color" >Backend:</span> Django(Python)</li>
                            <li><span className="color" >Authentication and Athorization:</span> Auth0</li>
                            <li><span className="color" >Storage:</span> AWS S3 Bucket</li>
                            <li><span className="color" >Application Programming Interface(API):</span> Django restframework</li>
                        </ul>
                    </div>
                </div>
        </>
    )
}