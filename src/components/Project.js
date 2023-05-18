import React from "react"
import { Link } from "react-router-dom";
import arrow from '../pictures/005-right-arrow-w.png'
import github from '../pictures/003-github-w.png'
import group from '../pictures/group.png'
import '../App.css';

export default function Project({ data, data2, prop , visible}) {
    
    let wlist = {}
    data2.forEach( (item, key) => {
        wlist[key + 1] = item.name
        return(wlist)
    }
    )

    return (
        <>{ data.length > 1 ?
        < div style={{ position: "relative"}}>
        <Link to="/projects" className="more2"><p>see more</p><img src={arrow} alt=''></img></Link>
    
        <section ref={prop} id="project" className={ visible ? "showing section" : "section"}>
            
            <div className="project-holder">

                {
                    data.map( (item , key) => {
                        return (
                            <div key={key} className="project">
                            
                                <div className="pinfo">
                                    <div>
                                        <a style={{ 'color': 'inherit' }} href={item.p_link}><h1>{item.name}</h1></a>
                                    </div>
                                    <div>
                                        <p>{item.info}</p>
                                    </div>
                                    <div>
                                     
                                     <p> <span className="underlineTxt">Project type</span>: {item.p_type}</p>
                                 </div>
                                 <div>
                                     
                                     <p><span className="underlineTxt">Worked on</span>: {item.worked_on}</p>
                                 </div>
                                    <div>

                                        <a style={{ 'color': 'inherit' }} href={item.github_link}><p><img src={github} alt="" style={{ 'width': '32px'}}></img>{item.github_link}</p></a>
                                    </div>
                                    <div>
                                    <p className="mne">
                                        <img src={group} alt="" style={{ 'width': '32px'}}></img>
                                        <>
                                        {item.worked_with.map( (n, key)=> {
                                            return(
                                                <span key={key} className="ne">{ wlist[n] }</span>
                                            )
                                        }
                                        
                                        )}
                                        </>
                                        </p>
                                    </div>
                                </div>
                                <div className="pimg" style={{'--mi': `${ item.mobile_preview }`, '--ti': `${ item.tab_preview }`, '--pi': `${ item.pc_preview }`}}>
                                    <div className="p-img"></div>
                                    <div className="device"></div>
                                </div>
                            </div>
                        )
                    })
                }  
    
            </div>
           
        </section>
        </div> : 
        <div  id="project" style={{ 'position': 'relative', 'zIndex': 10000 , 'margin': 'auto','width': '80vw', 'height' : '90svh', 'display': "flex", 'justifyContent': 'center', 'alignItems': 'center'}}>
            <h1 style={{ 'width': 'max-content'}}>NO PROJECTS </h1>
        </div>}
        </>
    )
}