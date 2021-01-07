import React, { useEffect, useState } from "react";
//import Note from "./Note";
//import matches from "./allMatches.js";
import {getMatches} from "./Api";
import Card from "./Card";
import Header from "./Header";

function App(){

    const [matches,setMatches] = useState([]);

    useEffect(()=>{
        getMatches()
        .then((data)=> {
            setMatches(data.matches);
           // console.log(data.matches);
        })
        .catch((error) => alert("could no load data"));

    },[])
    return (
        <div>
        <Header />
        <h1>welcome to my Live Score App</h1> 
        {
            matches.map((match)=>(
                <Card 
                key = {match.unique_id}
                id = {match.unique_id}
                team1={match['team-1']}
                team2= {match['team-2']}
                dateTimeGMT = {match.dateTimeGMT}
                />
            ))
        }
    </div>
    );
}


export default App;

/*
matches.map((match)=>{
    //console.log(match.type);
    return <Note 
        key = {match.unique_id}
        id = {match.unique_id}
        date = {match.date}
        dateTimeGMT = {match.dateTimeGMT}
        team1 = {match["team-1"]}
        team2 = {match["team-2"]}
        type = {match.type}
        squad = {match.squad}
        matchStarted = {match.matchStarted}
    />
})
*/


/*
console.log(matches);
matches.map((m=>{
    console.log(m.dateTimeGMT);
    return null;
}))
*/