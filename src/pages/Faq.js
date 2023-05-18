import React, {useEffect} from "react"; 
import '../App.css'
import Loading from "../components/Loading";
// import arrow from '../pictures/005-right-arrow-w.png'
import timeline from '../pictures/timeline.png.jpg'
import footer from '../pictures/footer.jpg'
import footerimg from '../pictures/footerimg.jpg'
import option from '../pictures/option.jpg'
import reportform from '../pictures/reportform.jpg'
import formbtn from '../pictures/formbtn.jpg'
import hire from '../pictures/hire.jpg'
import meet from '../pictures/meet.jpg'
import into from '../pictures/into.jpg'

const Faq = ({loading}) => {


    // function dropDown() {
    //     this.parentElement.classList.toggle('drop')
    //     // console.log( this.parentElement.classList)
 
    //     // e.target.style.transform = 'rotate(-90deg)'
    //     // e.target.addEventListener('click', closeDown)
    // }

    useEffect(() => {
        const drops = document.querySelectorAll('.content-head')
        for(let i = 0; i < drops.length; i++) {
            drops[i].onclick = function dropDown() {
                this.parentElement.classList.toggle('drop')
            }
        }
    },[])

    

    return(
        <>
        { loading ?
        <section id="faq">
            <div className="accordion">
                <div className="content-holder" data-id='1'>
                    <div className="content-head">
                        <h3>Navigation</h3>
                    
                    </div>
                    
                    <div className="content-info">
                        <div>
                            <p> Step</p>
                            <br></br>
                            <p>Use the side Timeline(by the right hand side of the screen) to navigate through out the webpage</p>
                        </div>
                        <div><img className="dirdt" alt='' src={timeline} height="250px"/></div>
                    </div>
                    
                </div>
                
                <div className="content-holder" data-id='2'>
                    <div className="content-head">
                        <h3>Report issue</h3>
                    </div>

                    <div className="content-info">
                        <div>
                        <p> Step 1</p>
                        <br/>
                        <p>Scroll down to the footer or click the last button on the timeline Navigation</p>
                        </div>
                        
                        <div><img alt='' src={footer} height="250px"/></div>
                    </div>
                    
                    <div className="content-info">
                        <div>
                        <p> Step 2</p>
                        <br/>
                        <p>In the Contact section there is a sub-section website , click on Report Layout bugs</p>
                        </div>
                    
                        <div><img alt='' src={footerimg} height="250px"/></div>
                    </div>
                 
                    <div className="content-info">
                        <div>
                        <p> Step 3</p>
                        <br/>
                        <p>Use the option field to specify a section</p>
                        </div>
                    
                        <div><img alt='' src={reportform} height="250px"/></div>
                    </div>
                    
                    <div className="content-info">
                        <div>
                        <p> Step 4</p>
                        <br/>
                        <p>If Section not available use the bug section text input field to specify (e.g. Worked Section) </p>
                    </div>
                    
                        <div><img alt='' src={option} height="250px"/></div>
                    </div>
                    
                    <div className="content-info">
                        <div>
                        <p> Step 5</p>
                        <br/>
                        <p>Use the buttons 'Reset' to clear form data and start again, 'Submit' to send form data </p>
                    </div>
                    
                        <div><img alt='' src={formbtn} height="250px"/></div>
                    </div>

                    
                </div>

                <div className="content-holder" data-id='3'>
                    <div className="content-head">
                        <h3>Hire / Setup meet</h3>
                    </div>
                    
                    <div className="content-info">
                    <div>
                        <p> Step 1a</p>
                        <br/>
                        <p>Click the 'Meet' button </p>
                    </div>
                        <div><img alt='' src={into} height="250px"/></div>
                    </div>
                    
                    <div className="content-info">
                    <div>
                        <p> Step 1bI</p>
                        <br/>
                        <p>Scroll down to the footer or click the fourth button on the timeline Navigation</p>
                    </div>
                        <div><img alt='' src={hire} height="250px"/></div>
                    </div>
                    
                    <div className="content-info">
                    <div>
                        <p> Step 1bII</p>
                        <br/>
                        <p>In the Buidwith.me section click on Hire</p>
                    </div>
                        <div><img alt='' src={footerimg} height="250px"/></div>
                    </div>
                    
                    <div className="content-info">
                    <div>
                        <p> Step 2</p>
                        <br/>
                        <p>Use the buttons 'Hire me' to send an email where an email template will be created for you, 'Setup meet' to send an email where an email template will be created for you</p>
                    </div>
                        <div><img alt='' src={meet} height="250px"/></div>
                    </div>
                    
                </div>

                <div className="content-holder" data-id='4'>
                    <div className="content-head">
                        <h3>View Projects / Skills / Designs</h3>
                        
                    </div>
                    
                </div>
                
            </div>
        </section>
        : <Loading/> }
        </>
    )
}

export default Faq