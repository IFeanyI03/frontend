import React from "react"
import { Link } from "react-router-dom";
import '../App.css';
import arrow from '../pictures/005-right-arrow-w.png'

export default function skills({ data, Ref, visible }) {

    let list = []
    let list2 = []
    let list3 = []
    
    data.forEach((item) => {
        if (item.skill_type[1] === 3) {
            list3.push(item)             
        }
        if (item.skill_type[0] === 2) {
            list2.push(item)           
        }
        if ( item.skill_type[0]=== 1) {
            list.push(item)           
        }
    })

    const first = list.slice(0, 4)

    return (
        <>

        <section ref={Ref} id="skills2" className={ visible ? "showing section" : "section"}>
            <div className="skills2">
                <Link className="more" to="/skills"><p>see more</p><img src={arrow} alt=''></img></Link>
                <h1>Skills</h1>
                <div className="card2" data-id="3">
                    <div className="n"><p>Frontend</p></div>
                    <div className="s">
                            {
                                first.map( (skills, key) => {
                                    return (
                                        <div key={key}>
                                            <img 
                                                alt="" 
                                                src={skills.image} 
                                                style={ skills.image ? {width: '64px'} : {display: "none"} }
                                            ></img>
                                        </div> 
                                    )
                                })
                            }
                    </div>
                    
                </div>
                <div className="card2" data-id="2">
                    <div className="n">Backend</div>
                    <div className="s">
                        {
                            list2.slice(0, 4).map( (skills, key) => {
                                return (
                                    <div key={key}>
                                        <img 
                                            alt="" 
                                            src={skills.image} 
                                            style={ skills.image ? {width: '64px'} : {display: "none"} }
                                        ></img>
                                    </div> 
                                )
                            })
                        }
                    </div>
                </div>
                <div className="card2" data-id="1">
                    <div className="n">Framework</div>
                        <div className="s">
                        {
                                list3.slice(0, 4).map( (skills, key) => {
                                    return (
                                        <div key={key}>
                                            <img 
                                                alt="" 
                                                src={skills.image} 
                                                style={ skills.image ? {width: '64px'} : {display: "none"} }
                                            ></img>
                                        </div> 
                                    )
                                })
                            }
                        </div>
                    
                </div>
            </div>
        </section>
        </>
    )
}