import React, { useState } from "react";
import { getMatchDetails } from "./Api";

function Card(props){

    const [details,setDetails] = useState({});

    const handleClick=()=>{
        //console.log(props);
        //alert(id);
        getMatchDetails(props.id)
        .then((data)=>{
            console.log("Match data",data);
            setDetails(data);
            getDialogBox();
        })
        .catch((error)=>console.log("no details"));
    }

    const getMatchCard = ()=>{
        return  (
            <div>
                <div>
                    <h5>{props.team1}</h5>
                    <img style={{justify:"center"}} src={require("../images/vs1.png")} alt=" "/>
                    <h5>{props.team2}</h5>
                </div>
                <button className="btn btn-primary" onClick = {handleClick}>Details</button>
                Start Time<button>{new Date(props.dateTimeGMT).toLocaleString()}</button>
            </div>
        )
    }

    const getDialogBox=()=>{
        <dialog open>
        {details.matchStarted?"started":"still not started"}
        {details.score}
        </dialog>
    }
    return getMatchCard();

}
export default Card;
