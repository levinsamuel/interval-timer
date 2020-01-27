import React, { useState } from 'react';
import { Timer } from 'fun-timer';
import Button from 'react-bootstrap/Button';

type PropTypes = {

};

console.log('timer', Timer)

export default function Main(props: PropTypes) {

    const [started, setStarted] = useState(false);
    return (
        <div id='main'>
            <Timer seconds={30} minutes={23} started={started} />
            <Button variant="primary" onClick={() => setStarted(!started)}>
                { started ? "Stop" : "Start" }
            </Button>
        </div>
    );
}