import React from "react";

const Section = ({x, y}) => {

    return(
        <div className="section">
            <hr/>
            <h1>{x}</h1>
            <p>{y}</p>
            <br/>
        </div>
    )
}

export default Section 