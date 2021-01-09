import React, { useState } from "react";
import { Card } from 'react-bootstrap';
import { getMatchDetails } from "./Api";

import Popup from "./Popup";

function Item(props){

    const [details,setDetails] = useState({});

    const [show, setShow] = useState(false);

    const handleHide = () => {
        setShow(false);
    }

    const handleClick=()=>{
        getMatchDetails(props.id)
        .then((data)=>{
            //console.log("Match data",data);
            setDetails(data);
            setShow(true);
        })
        .catch((error)=>console.log("no details"));
    }

    return (
        <>
            <Card className="custom-card">
                <Card.Title className="match-title">Match -{props.index +1 }</Card.Title>
                <Card.Body>
                    <h3>{props.team1}</h3>
                    <h5>vs</h5>
                    <h3>{props.team2}</h3>
                    {new Date(props.dateTimeGMT).toLocaleString()}
                </Card.Body>
                <Card.Footer>
                    <button className="button" onClick = {handleClick}>Details</button>
                </Card.Footer>
            </Card>
            { show && 
                <Popup 
                    details={details}
                    handleHide={handleHide}
                />
            }
        </>
    );

}
export default Item;
