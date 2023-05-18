import React from "react"
import '../App.css';

export default function Hire({prop, visible}) {

    let body = "mailto:ifeanyiaghasili@gmail.com?subject=Freelance Opportunity: [Job Position]&body= Dear [Freelancer Name], \n \nI hope this message finds you well. I am reaching out to you because we are impressed with your portfolio and think that you would be an excellent addition to our team as a freelance [Job Position] \n \nOur company, [Company Name], is seeking a skilled [Job Position] to assist us in a project. We have reviewed your previous work, and we believe that you  skills and expertise would be a great fit for this project. \n \nWe are looking for someone who can [Key Requirements/Responsibilities for the job]. Your experience and skills align with what we need, and we are confident that you can deliver quality work for us. \n \nWe would like to schedule a call with you to discuss this opportunity further. During the call, we will provide more information about the project, timeline, and compensation. Please let us know your availability and preferred mode of communication, and we will arrange a time that works best for us. \n \nIf you are interested in working with us, please respond to this email as soon as possible. We would be thrilled to have you join our team for this project. \n \nThank you for considering this opportunity. We look forward to hearing back from you soon. \n \nBest regards, \n \n[Your Name]\n\n[Company Name]"
    let uri = encodeURI(body)
    let body2 = "mailto:ifeanyiaghasili@gmail.com?subject=Virtual Meeting Request\n\nDear [Recipient's Name],\n\nI hope this email finds you well. I am writing to request a virtual meeting to discuss [topic or purpose of the meeting]. Given the current circumstances, a virtual meeting would be the most convenient and efficient way to connect.\n\nI highly value your expertise and insights on this matter, and I believe a meeting would greatly contribute to our progress. Here are the details for scheduling the virtual meeting:\n\nDate: [Proposed Date(s)]\nTime: [Proposed Time(s)]\nDuration: [Estimated Duration]\nPlatform: [Preferred Virtual Meeting Platform]\nAgenda: [Brief outline of topics to be discussed]\n\nPlease let me know if the proposed date and time work for you. If not, kindly suggest an alternative that suits your schedule better. I am open to accommodating adjustments to ensure everyone's availability.\n\nFurthermore, if there are any specific items or topics you would like to add to the agenda, please feel free to let me know. I want to make sure that our meeting covers all the necessary points and provides a productive environment for collaboration.\n\nTo confirm your availability or propose an alternative, please respond to this email at your earliest convenience. If you have any questions or require additional information before the meeting, please do not hesitate to reach out.\n\nThank you for considering my request, and I look forward to connecting with you soon.\n\nBest regards,\n\n[Your Name]\n[Your Position/Role]\n[Your Contact Information]"
    let uri2 = encodeURI(body2)

    return (
        <>
        <section ref={prop} id="hire" className={ visible ? "showing section" : "section"} >
            <div className="hire">
                <div className="hire-holder">
                    <h1>Need to build a 
                        <div className="e">
                            <div className="e-content">
                                <p>webpage?</p>
                                <p>working API?</p>
                                <p>Backend?</p>
                            </div>
                        </div>
                        <span>Buildwith.me</span> has you covered
                    </h1>
                    <div className="divbtn">
                        <a href={uri}><button style={{ 'backgroundColor' : 'var(--color)', 'outline': 'none', 'color': 'var(--accent-color)'}}>Hire me</button></a>
                        <a href={uri2}><button>Setup meet</button></a>
                    </div>
                </div>
            </div>
            <div className="back">
                <div className="di">
                    <div id="blob"></div>
                </div>
            </div>
            <div className="back">
                <div className="di2">
                    <div id="blob2"></div>
                </div>
            </div>
            <div className="back">
                <div className="di3">
                    <div id="blob3"></div>
                </div>
            </div>
        </section>
        </>
    )
}