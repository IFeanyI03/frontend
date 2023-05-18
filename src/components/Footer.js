import React from "react"
import { Link } from "react-router-dom"
import { useInView } from "react-intersection-observer"
import { HashLink as HLink } from "react-router-hash-link"
import '../App.css'
import twitter from '../pictures/001-twitter-w.png'
import linkedin from '../pictures/002-linkedin-w.png'
import github from '../pictures/003-github-w.png'
import mail from '../pictures/004-mail-w.png'
import pdf from '../files/Ifeanyi Aghasili resume.pdf'

const Project = () => {

    const {ref :tRef, inView: tInView} = useInView()
    const {ref :lRef, inView: lInView} = useInView()
    const {ref :gRef, inView: gInView} = useInView()
    const {ref :mRef, inView: mInView} = useInView()

    return (
        <>
            <footer id="footer">
                <div className='f-row' >
                    <h1>Buildwith.me</h1>
                    <div>
                        <HLink to='#'>Home</HLink>
                        <HLink to='#bio'>Bio</HLink>
                        <HLink to='#skills2'>Skills</HLink>
                        <HLink to='#hire'>Hire</HLink>
                        <HLink to='#project'>Project</HLink>
                        <Link to='/designs'>Designs</Link>
                    </div>
                </div>
                
                <div className='f-row'>
                    <h1>Documents</h1>
                    <div>
                        <a href={pdf} download={"Ifeanyi Aghasili resume"}>Resume</a>
                    </div>
                </div>

                <div className='f-row'>
                    <h1>Contact</h1>
                    <div>
                        <h3>Personal</h3>
                        <div className="ty">
                            <a ref={tRef} className={ tInView ? "rote tyi" : "tyi"} href="https://twitter.com/IfeanyiAghasili?t=Q4au6EpNDDp0LgmXGd4jNA&s=09"><img alt="" src={twitter}></img></a>  
                            <a ref={lRef} className={ lInView ? "rote tyi" : "tyi"} href="https://www.linkedin.com/in/ifeanyi-aghasili-41071923a"><img alt="" src={linkedin}></img></a>
                            <a ref={gRef} className={ gInView ? "rote tyi" : "tyi"} href="https://github.com/IFeanyI03"><img alt="" src={github}></img></a>   
                            <a ref={mRef} className={ mInView ? "rote tyi" : "tyi"} href="mailto:ifeanyiaghasili@gmail.com?subject"><img alt="" src={mail}></img></a> 
                            <a className="tyt" href='tel:+234-791-482-9463'>+234-791-482-9463</a>
                            <span className="tyt">Lagos, Nigeria</span>
                        </div>
                    </div>
                    <div >
                        <h3>Website</h3>
                        <div className="tz">
                            <Link to='/report'>Report Layout bugs</Link>
                            <Link to='/faq'>FAQ</Link>
                        </div>
                    </div>
                </div>
                
            </footer>
        </>
    )
    
}

export default Project