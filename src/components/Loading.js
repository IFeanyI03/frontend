import React from "react";
import '../App.css'

const Loading = () => {
    return(
        <>
            <div className="loader">
                <div className="loader-holder">
                    <div className="load-stroke" ></div>
                    <div className="load-stroke" ></div>
                    <div className="load-stroke" ></div>
                    <div className="load-stroke" ></div>
                    <div className="load-stroke" ></div>
                </div>
            </div>
        </>
    )
}

export default Loading