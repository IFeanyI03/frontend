import React from "react"
import { useInView } from "react-intersection-observer"
import '../App.css'
import Header from '../components/Header'
import Intro from '../components/Intro'
import Bio from "../components/Bio"
import Skills from "../components/Skills"
import Hire from '../components/Hire'
import Project from "../components/Project"
import Footer from '../components/Footer'
import Loading from "../components/Loading"

export default function Home({ skillsData, projectsData, workedWithData, loading }) {

    const { ref: bioRef, inView: bioIsVisible } = useInView();
    const { ref: bio2Ref, inView: bio2IsVisible } = useInView();
    const { ref: skillRef, inView: skillIsVisible } = useInView();
    const { ref: projectRef, inView: projectIsVisible } = useInView();
    const { ref: hireRef, inView: hireIsVisible } = useInView();

    return(
        <>
         { loading ?
         <>
            <div id="body">
                <Header />
                <Intro />
                <Bio 
                    prop={bioRef}
                    visible={bioIsVisible}
                    prop2={bio2Ref}
                    visible2={bio2IsVisible}
                />
                <Skills 
                    Ref={skillRef}
                    visible={skillIsVisible}
                    data={skillsData}
                />
                <Hire 
                    prop={hireRef}
                    visible={hireIsVisible}
                />
                <Project 
                    prop={projectRef}
                    visible={projectIsVisible}
                    data={projectsData}
                    data2={workedWithData}
                />
            </div>
            <Footer />
            </>
            : < Loading/>}
        </>
    )
}