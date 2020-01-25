import React, { useState, useEffect } from 'react';

type PropTypes = {
    seconds?: number,
    minutes?: number,
};

export default function Timer(props: PropTypes) {

    const {
        seconds = 0,
        minutes = 0,
    } = props;
    // s
    const propSeconds = minutes * 60 + seconds;
    // ms
    const startTime = new Date().getTime()
    const endTime = (startTime/1000 | 0) + propSeconds

    const [originalEndTimeSeconds, ] = useState(endTime);
    const [stateSeconds, setSeconds] = useState(propSeconds);

    useEffect(() => {

        const countDown = () => {
            const currentTimeSeconds = (new Date().getTime() / 1000 | 0)
            const newStateSeconds = originalEndTimeSeconds - currentTimeSeconds;
            setSeconds(newStateSeconds)
        }
        const timer = window.setInterval(countDown, 100);
        return () => window.clearInterval(timer)
    })

    const displayMinutes = String(stateSeconds/60 | 0).padStart(2, '0');
    const displaySeconds = String(stateSeconds%60).padStart(2, '0');
    return (
        <div>
            <p className='h1'>{displayMinutes}:{displaySeconds}</p>
        </div>
    )
}