import React, { useState } from "react"; 
import '../App.css'
import Loading from "../components/Loading";

const Report = ({loading}) => {

    const [messge, setMessage] = useState('')
    const [formData, setFormData] = useState({
        description: '',
        choice: '',
        err_section: '',
        d_height: window.screen.height,
        d_width: window.screen.width
    })


    function handleChange(e) {
        const {name, value} = e.target
        setFormData( prevData => {
            return {
                ...prevData,
                [name] : value
            }
        })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch('http://127.0.0.1:8000/api-reported_errors/', {
            method : 'POST',
            headers : {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        })
        .then( response => {
            return response.json
        })
        .then(() => {
            setFormData({
                description: '',
                choice: '',
                err_section: '',
                d_height: window.screen.height,
                d_width: window.screen.width
            })
            setMessage('Report Logged')}
        ).catch()
    }

    

    const option = ["Layout", 'Links', 'Animation']

    return(
        <>
        { loading ?
        <section id="report">
            <p style={{backgroundColor: 'green', width: "100vw", height: "max-content"}}>{messge}</p>
            <br/>
            <form 
                id="form"
                onSubmit={handleSubmit}
                method="post"
            >
                <fieldset>
                    <legend style={{ 'color': '#FBB03B'}}>Options *</legend>
                    <select 
                        id="option" 
                        style={{'width': '270px', 'borderRadius': '20px', 'height': '50px', padding: '0px 10px '}}
                        onChange={handleChange}
                        value={formData.choice}
                        name='choice'
                    >
                        <option></option>
                        {option.map((item, key) => {
                            return(
                                 <option key={key}>{item}</option>
                            )
                        })}
                        <option>Option not available</option>
                       
                    </select>
                </fieldset>
                    <label htmlFor="text" style={formData.optionChoice !== 'Option not available' ? {'opacity': .1} : { 'color': '#FBB03B'}}>Bug section *</label>
                    <input 
                        style={formData.choice !== 'Option not available' ? {'display': 'none'} : {'display': 'block', 'width': '260px', 'borderRadius': '10px', 'height': '50px', 'paddingLeft': '10px'}} 
                        placeholder="Where is the issue"
                        type='text'
                        name="err_section"
                        maxLength={15}
                        onChange={handleChange}
                        value={formData.err_section}
                    ></input>
                <fieldset>
                    <legend style={{ 'color': '#FBB03B'}}>Description *</legend>
                    <textarea 
                        style={{
                            'width': '260px',
                            'height':'150px', 
                            'borderRadius': '10px', 
                            'paddingLeft': '10px', 
                            'paddingTop': '10px'
                        }}
                        placeholder="Describe the issue"
                        name="description"
                        onChange={handleChange}
                        value={formData.description}
                    ></textarea>
                </fieldset>
                <fieldset style={{ 'width': '270px','display': 'flex', 'justifyContent': 'space-between'}}>
                    
                    <input 
                        type='reset'
                        value='Reset'
                        style={{ 'color': '#d4145a', 'width': '130px','height':'50px', 'borderRadius': '10px'}}
                    ></input>

                    <input 
                        type='submit'
                        value='submit'
                        style={{ 'border': '2px solid #d4145a','width': '130px', 'height':' 50px', 'borderRadius': '10px'}}
                    ></input>
                </fieldset>
            </form>
            <div></div>
        </section>
        : <Loading/> }
        </>
    )
}

export default Report