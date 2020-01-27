import React, { useState, useEffect } from 'react';

export type PropTypes = {
  seconds?: number;
  minutes?: number;
  started?: boolean;
  className?: string;
  beepInterval?: number;
};

export default function Timer(props: PropTypes) {
  const { seconds = 0, minutes = 0, started = true, className = 'h1' } = props;
  // s
  const propSeconds = minutes * 60 + seconds;
  // ms
  const getTimeSeconds = () => Math.trunc(new Date().getTime() / 1000);
  const originalStartTime = getTimeSeconds();
  const originalEndTimeSeconds = (Math.trunc(originalStartTime / 1000)) + propSeconds;

  const [priorState, setPriorState] = useState(started);
  const [endTimeSeconds, setEndTime] = useState(originalEndTimeSeconds);
  const [stateSeconds, setSeconds] = useState(propSeconds);

  if (started && !priorState) {
    // console.debug('changed from paused to started.');
    setEndTime(getTimeSeconds() + stateSeconds);
    setPriorState(started);
  } else if (!started && priorState) {
    // console.debug('changed from started to paused.');
    setPriorState(started);
  }

  useEffect(() => {
    const countDown = () => {
      if (!started) {
        return;
      }
      const currentTimeSeconds = Math.trunc(new Date().getTime() / 1000);
      const newStateSeconds = endTimeSeconds - currentTimeSeconds;
      if (newStateSeconds <= 0) {
        window.clearInterval(timer);
      }
      setSeconds(newStateSeconds);
    };
    const timer = window.setInterval(countDown, 100);
    return () => window.clearInterval(timer);
  });

  const displayMinutes = String(Math.trunc(stateSeconds / 60)).padStart(2, '0');
  const displaySeconds = String(stateSeconds % 60).padStart(2, '0');
  return (
    <div>
      <p className={className}>
        {displayMinutes}:{displaySeconds}
      </p>
    </div>
  );
}
