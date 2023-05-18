import React, { useEffect, useState } from "react"
import { HashLink as Link } from 'react-router-hash-link'
import { Typewriter } from 'react-simple-typewriter'
import '../App.css';
import user from '../pictures/user.png'
import meet from '../pictures/meet.png'

export default function Intro() {

    const [isVisible, setIsVisible] = useState(true)
    const [greeting, setGreeting] = useState('')

    const toggleText = () => {
       let value = window.scrollY
       const v2 = window.innerHeight
        // console.log(value)
        if(value <= (v2 / 3.5) ) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }
    
    const getTime = () => {
        
        let d = new Date();
        let hour = d.getHours();
                
        if(hour < 12) {
            setGreeting("Good Morning")
        }
        else if(hour < 16 | hour === 12) {
            setGreeting("Good Afternoon")
        }
        else {
            setGreeting("Good Evening")
        }
    
        document.getElementById("time").innerHTML = greeting;
    }

    useEffect(() => () => {
        window.addEventListener('scroll', toggleText);
    },)

    useEffect(() => {
        // window.addEventListener('scroll', toggleText);
        window.addEventListener('load', getTime());
        return window.removeEventListener('load', getTime());
    })

    return(
        <>
            <section id="intro" className={ isVisible ? 'visible' : 'notVisible' }>
                <div className="intro">
                    <p id="time">{ greeting }</p>
                    <h1 id="name">
                        <Typewriter 
                            words={['Hello,', 'Ifeanyi Yahweh Aghasili']}
                            loop={1}
                            cursor
                            cursorStyle='_'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={3000}
                        />
                    </h1>
                    <p className="title" id="w"> </p>
                    <div className="t">
                        <div className="t-content">
                            <p className="title">Full Stack Web Developer</p>
                            <p className="title">Graphic Designer</p>
                        </div>
                    </div>
                    <div className="btn">
                        <Link to="#hire">
                            <button className="button">
                                <p>Meet</p>
                                <img alt="img" src={meet}></img>
                            </button></Link>
                        <Link to="#bio" id="biobtn">
                            <button className="button">
                                <p>Bio</p>
                                <img alt="img" src={user}></img>
                            </button>
                        </Link>
                    </div>
                </div>
            </section>
        </>
    )
}