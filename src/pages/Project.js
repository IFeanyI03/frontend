import React from "react"
import { useInView } from "react-intersection-observer"
import github from '../pictures/003-github-w.png'
import group from '../pictures/group.png'
import '../Project.css'
import Loading from "../components/Loading"

const Project = ({projectsData, data2, loading}) => {

    const {ref: myRef, inView } = useInView()

    let wlist = {}
    data2.forEach( (item, key) => {
        wlist[key + 1] = item.name
        return(wlist)
    }
    )

    return(
        <>
        { loading ?
        <section ref={myRef} className={inView ? "sp section showing" : " sp section"}>
            <div className="p2-holder">
            { projectsData.map( (item, key) => {
                return(
                    <div key={key} className="project2">
                            <div className="pinfo2">
                                <div>
                                    <h1>{item.name}</h1>
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
                                        <span>
                                        {item.worked_with.map( (n, key)=> {
                                            return(
                                                <span key={key} className="ne">{ wlist[n] }</span>
                                            )
                                        }
                                        
                                        )}
                                        </span>
                                    </p>
                                </div>
                               
                                
                            </div>
                            <div className="pimg2">
                                <div className="p-img2"></div>
                                <div className="device2"></div>
                            </div>
                    </div>
                )
            })
            }
            </div>
        </section>
        : <Loading/> }
        </>
    )
}

export default Project