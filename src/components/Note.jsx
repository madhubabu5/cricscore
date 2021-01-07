import React from "react";

function Note(props){
    return <div>
        <h1>Match</h1>
        <h1>{props.date}</h1>
        <h1>{props.dateTimeGMT}</h1>
        <h1>{props.team1}</h1>
        <h1>{props.team2}</h1>
        <h1>{props.type}</h1>
        <h1>{props.squad?"squad":"no squad"}</h1>
        <h1>{props.matchStarted?"started":"not yet started"}</h1>
    </div>
}

export default Note;