import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';

const Popup = (props) => {
    const { handleHide, details: { matchStarted, score } } = props;

    //console.log(score);

    const [show, setShow] = useState(true);

    const onHide = () => {
        setShow(false);
        handleHide();
    }
    
    return (
        <React.Fragment>
            <Modal show={show} onHide={onHide}>
                <Modal.Header>
                    <Modal.Title className="result-title">Match Result</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h2>{matchStarted ? "match started": "still not started" }</h2>
                    <h4>{score}</h4>
                </Modal.Body>
            </Modal>
        </React.Fragment>
    );
}

export default Popup;
