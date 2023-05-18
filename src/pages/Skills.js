import React from "react"
import '../Skills.css'
import { useInView } from "react-intersection-observer"
import Loading from "../components/Loading"

export default function Skills({ loading, skillsData }) {

    const level = {
        '45': 'Beginner',
        '75': 'Intermediate',
        '95': 'Advance'
    }

    let list = []
    let list2 = []
    let list3 = []
    let list4 = []

    skillsData.forEach(item => {
        if (item.skill_type[1] === 3) {
            list3.push(item)             
        }
        if (item.skill_type[0] === 2) {
            list2.push(item)           
        }
        if ( item.skill_type[0]=== 1) {
            list.push(item)           
        }
        if ( item.skill_type[0] === 4){
            list4.push(item)
        }
    })

    function zoomOut(e) {
        e.target.nextSibling.style.opacity = '1'
        e.target.style.opacity = '1'
        e.target.nextSibling.children[1].style.animation =  "fadeIn 1s 1.75s linear forwards";
        e.target.style.animation =  "animteDot 1.5s linear forwards";
        e.target.parentElement.parentElement.childNodes[0].childNodes[1].style.width = '40px'    
    }

    function zoomIn(e) {
        e.target.nextSibling.style.opacity = '0'
        e.target.style.opacity = '0'
        e.target.style.animation =  "";
        e.target.nextSibling.children[1].style.animation =  "";
        e.target.parentElement.parentElement.childNodes[0].childNodes[1].style.width = '80px'
        e.target.parentElement.parentElement.childNodes[0].childNodes[1].style.transition = '.5s'
    }
        
    const dots = document.querySelectorAll('.dot')
    for( let i = 0; i < dots.length; i++){
        dots[i].addEventListener('mousemove', zoomOut)
        dots[i].addEventListener('mouseleave', zoomIn)
    }    

    const {ref: bRef, inView: bInView} = useInView()
    const {ref: fRef, inView: fInView} = useInView()
    const {ref: frRef, inView: frInView} = useInView()
    const {ref: dRef, inView: dInView} = useInView()

    return(
        <>
        { loading ?
            <section className="sec" >
                <h1>Skills</h1>
                <p><span className="secsp">i</span> click on skill to see more</p>
            <div className="p2-holder">
                <div className="row">
                    <div ref={fRef} className={ fInView ? "ss showing col" : "ss" }>
                        <h1><span></span> <span className="text">Fronted</span> </h1>
                        <div className="card-holder">
                            <div className="cards">
                                { 
                                    list.map( (skill, key) => {
                                        return (
                                            <div className="card" key={key}>
                                                <div className="info-holder">
                                                    <h4>{skill.name}</h4>
                                                    <img alt="" src={
                                                        skill.image} 
                                                        className="r" 
                                                        style={ skill.image ? {width:  '80px' } : {display: "none"} }
                                                    ></img>
                                                    <p>{level[skill.level]}</p>
                                                </div>
                                                <div 
                                                    className="percent" 
                                                    style={{ '--clr' : `${ '#' + skill.color}` , '--num' : skill.level }}
                                                >
                                                    <div className="dot"></div>
                                                    <svg>
                                                        <circle cy="50%" cx='50%' r='70'></circle>
                                                        <circle cy="50%" cx='50%' r='70'></circle>
                                                    </svg>
                                                </div>
                                            </div>
                                        )}
                                    )
                                }
                            </div>
                        </div>
                    </div>
                    <div ref={bRef} className={ bInView ? "ss showing col" : "ss" }>
                        <h1><span></span> <span className="text">Backend</span> </h1>
                        <div className="card-holder">
                            <div className="cards">
                            { list2.map( (skill, key) => {
                                    
                                    return (
                                        <div className="card" key={key}>
                                        <div className="info-holder">
                                            <h4>{skill.name}</h4>
                                            <img alt="" src={skill.image} style={ skill.image ? {width: '80px'} : {display: "none"} }></img>
                                            <p>{level[skill.level]}</p>
                                        </div>
                                        <div className="percent" style={{ '--clr' : ` ${ '#' + skill.color}` , '--num' : skill.level }}>
                                        <div className="dot"></div>
                                            <svg>
                                                <circle cy="50%" cx='50%' r='70'></circle>
                                                <circle cy="50%" cx='50%' r='70'></circle>
                                            </svg>
                                        </div>
                                    </div> )
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                    <div ref={frRef} className={ frInView ? "ss showing col" : "ss" }>
                        <h1> <span></span> <span className="text">Framework</span>  </h1>
                        <div className="card-holder">
                            <div className="cards">
                            { list3.map( (skill, key) => {
                                    
                                    return (
                                        <div className="card" key={key}>
                                        <div className="info-holder">
                                            <h4>{skill.name}</h4>
                                            <img alt="" src={skill.image} style={ skill.image ? {width: '80px'} : {display: "none"} }></img>
                                            <p>{level[skill.level]}</p>
                                        </div>
                                        <div className="percent" style={{ '--clr' : ` ${ '#' + skill.color}` , '--num' : skill.level }}>
                                        <div className="dot"></div>
                                            <svg>
                                                <circle cy="50%" cx='50%' r='70'></circle>
                                                <circle cy="50%" cx='50%' r='70'></circle>
                                            </svg>
                                        </div>
                                    </div> )
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                    <div ref={dRef} className={ dInView ? "ss showing col" : "ss" }>
                        <h1><span></span> <span className="text">Design</span> </h1>
                        <div className="card-holder">
                            <div className="cards">
                            { list4.map( (skill, key) => {
                                    
                                    return (
                                        <div className="card" key={key}>
                                        <div className="info-holder">
                                            <h4>{skill.name}</h4>
                                            <img alt="" src={skill.image} style={ skill.image ? {width: '80px'} : {display: "none"} }></img>
                                            <p>{level[skill.level]}</p>
                                        </div>
                                        <div className="percent" style={{ '--clr' : ` ${ '#' + skill.color}` , '--num' : skill.level }}>
                                        <div className="dot"></div>
                                            <svg>
                                                <circle cy="50%" cx='50%' r='70'></circle>
                                                <circle cy="50%" cx='50%' r='70'></circle>
                                            </svg>
                                        </div>
                                    </div>)
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        : <Loading />}
        </>
    )
}