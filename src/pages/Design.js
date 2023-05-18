import React, { useState } from "react"
import { useInView } from "react-intersection-observer"
import '../Design.css'
import Loading from "../components/Loading"

export default function Design({ designsData, data2, loading }) {

    const {ref: myRef, inView } = useInView()

    
    const [srcLink, setSrcLink] = useState('')
    const [info, setInfo] = useState('')
    const [worked, setWorked] = useState([])

    const pcards = document.querySelectorAll('.pcard')
        for(let i = 0; i < pcards.length; i++) {
            pcards[i].onclick = function openModal(e) {
                setSrcLink( e.target.attributes[1].value)
                document.getElementById('modal').className = 'show'
                setInfo(e.target.nextSibling.children[0].innerText)
                const span = e.target.nextSibling.children[1].children
                for( let i = 0; i < span.length; i++){
                    setWorked(prev => [...prev, e.target.nextSibling.children[1].children[i].innerText]) 
                }
                    
                console.log(info, worked) 
                const closeBtn = document.getElementById('modalbtn')
                closeBtn.addEventListener('click' , closeIt)
            }

            function closeIt(){
                document.getElementById('modal').className = 'hide'
                setWorked([])
                setInfo('')
            }
        }

    let wlist = {}
    data2.forEach( (item, key) => {
        wlist[key + 1] = item.name
        return(wlist)
    })
    

    return(
        <>
        { loading ? 
        <>
            <section ref={myRef} className={inView ? "sp section showing" : " sp section"}>
                <div id='pH' className="p-holder">
                    <div className="pcol">
                        {
                            designsData.slice(0, 5).map((p, key) => {
                                return(
                                    <div key={key}>
                                    <img className="pcard" src={p.image} alt=""></img>
                                    <div style={{'display': 'none'}}>
                                        <p>{p.info}</p>
                                        <div>
                                        { p.worked_with.map( (n, key) => {
                                            return(
                                                 <span key={key} className="ne">{ n }</span>
                                            )
                                        })
                                        }
                                        </div>
                                    </div>
                                    
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="pcol">
                        {
                                designsData.slice(5, 10).map((p, key) => {
                                    return(
                                        <div key={key}>
                                        <img className="pcard" src={p.image} alt=""></img>
                                        <div style={{'display': 'none'}}>
                                            <p>{p.info}</p>
                                            <div>
                                            { p.worked_with.map( (n, key) => {
                                                return(
                                                     <span key={key} className="ne">{ n }</span>
                                                )
                                            })
                                            }
                                            </div>
                                        </div>
                                        
                                        </div>
                                    )
                            })
                        }
                    </div>    
                    <div className="pcol">
                        {
                            designsData.slice(10, 15).map((p, key) => {
                                    return(
                                        <div key={key}>
                                        <img className="pcard" src={p.image} alt=""></img>
                                        <div style={{'display': 'none'}}>
                                            <p>{p.info}</p>
                                            <div>
                                            { p.worked_with.map( (n, key) => {
                                                return(
                                                     <span key={key} className="ne">{ n }</span>
                                                )
                                            })
                                            }
                                            </div>
                                        </div>
                                        
                                        </div>
                                    )
                            })
                        }
                    </div>
                    <div className="pcol">
                        {
                            designsData.slice(15, 20).map((p, key) => {
                                return(
                                    <div key={key}>
                                    <img className="pcard" src={p.image} alt=""></img>
                                    <div style={{'display': 'none'}}>
                                        <p>{p.info}</p>
                                        <div>
                                        { p.worked_with.map( (n, key) => {
                                            return(
                                                 <span key={key} className="ne">{ n }</span>
                                            )
                                        })
                                        }
                                        </div>
                                    </div>
                                    
                                    </div>
                                )
                            })
                        }
                    </div>
  
                </div>

                
            </section>
            <div id="modal" className="hide">
                    <div>
                        <div>
                            <img id="modalimg" src={ srcLink } alt=''></img>
                            <div style={{ display: "flex", gap : '10px', flexDirection: 'column'}}>
                                <h3 style={{ color : 'var(--accent-color2)'}}>Designed for:</h3> <p id="modalfor" style={{display: 'flex', flexDirection: 'column', alignItems: 'start'}}>{ worked.map( (num, key) => {
                                    return(
                                        <span key={key}>{wlist[num]}</span>
                                        )
                                })
                                }</p>
                                <h3 style={{ color : 'var(--accent-color2)'}}>info:</h3> <p id="modalinfo">{info
                                }

                                </p>
                            </div>
                        </div>
                        <button id="modalbtn" style={{"color" : "red"}}>
                             <div className="cross"></div>
                             <div className="cross"></div>
                        </button>
                    </div>
            </div>
            </>
            : <Loading />}
        </>
    )
}