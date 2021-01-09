import React, { useEffect, useState } from "react";

import {getMatches} from "./Api";
import Item from "./Item";
import Header from "./Header";
import './style.css';

function App(){

    const [matches,setMatches] = useState([]);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    useEffect(()=>{
        getMatches()
        .then((data)=> {
            setData(data.matches);
            setMatches(data.matches.slice(0, 9));
        })
        .catch((error) => alert("could no load data"));

    },[]);

    const handleNext = () => {
        const nextIndex = page * 9;
        setMatches(data.slice(nextIndex, nextIndex + 9));
        setPage(page +1);
    }

    const handlePrev = () => {
        const prevIndex = (page-1)*9;
        setMatches(data.slice(prevIndex-9,prevIndex));
        setPage(page-1);
    }


    return (
    <div>
        <Header />
        <div className="row">
        {
            matches.map((match, index)=> {
                return (
                    <Item 
                        key = {match.unique_id}
                        id = {match.unique_id}
                        index = {index}
                        team1={match['team-1']}
                        team2= {match['team-2']}
                        dateTimeGMT = {match.dateTimeGMT}
                    />
                );
            })
        }
        </div>
        <div className="buttons">
        <button className={page===1?"button disabled":"button"} onClick={handlePrev}>Prev</button>
        <button className="button" onClick={handleNext}>Next</button>
        </div>
    </div>
    );
}

export default App;


