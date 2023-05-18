import './App.css';
import React, { useState ,useEffect } from 'react';
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import Nav from './components/Nav'
import Home from './pages/Home'
import Skills from './pages/Skills'
import Design from './pages/Design'
import Project from './pages/Project';
import Report from  './pages/Report'
import Faq from './pages/Faq';

const URL = [`http://127.0.0.1:8000/api-skills/`, `http://127.0.0.1:8000/api-projects/`, `http://127.0.0.1:8000/api-designs/`, `http://127.0.0.1:8000/api-worked_withs/`]

function App() {
  const [skillsData, setSkillsData] = useState([])
  const [projectsData, setProjectsData] = useState([])
  const [designsData, setDesignsData] = useState([])
  const [workedWithData, setWorkedWithData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
        const result = await fetch(URL[0])
        result.json().then( json => {
            setSkillsData(json.results)
            setLoading(true)
        })
      }

  const fetchData2 = async () => {
      const result = await fetch(URL[2])
      result.json().then( json => {
          setDesignsData(json.results)
          setLoading(true)
      })
  }

  const fetchData3 = async () => {
      const result = await fetch(URL[1])
      result.json().then( json => {
          setProjectsData(json.results)
          setLoading(true)
      })
  }

  const fetchData4 = async () => {
    const result = await fetch(URL[3])
    result.json().then( json => {
      setWorkedWithData(json.results)
      setLoading(true)
    })
  }

  fetchData();
  fetchData2();
  fetchData3();
  fetchData4();
}, [])

  return (
    <>
   
    
    <Router>
      
      <Nav/>
      <Routes>
        <Route path='/' exact element={<Home loading={loading} skillsData={skillsData} projectsData={projectsData} workedWithData={workedWithData} />}></Route>
        <Route path='/skills' element={<Skills loading={loading} skillsData={skillsData} />}></Route>
        <Route path='/designs' element={<Design loading={loading}  designsData={designsData} data2={workedWithData} />}></Route>
        <Route path='/projects' element={<Project loading={loading} projectsData={projectsData} data2={workedWithData} />}></Route>
        <Route path='/report' element={<Report loading={loading} />}></Route>
        <Route path='/faq' element={<Faq loading={loading} />}></Route>
      </Routes>

    </Router>


    </>
  );
}

export default App;
