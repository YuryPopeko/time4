import React, { useEffect } from 'react';

import './styles.css';

const formatTime = seconds => (new Date(seconds * 1000)).toISOString().substr(11, 8);

const Timer = ({ name, seconds, setSeconds, isActive }) => {
  useEffect(() => {
    let interval = null;

    if (isActive) {
      interval = setInterval(() => {
        setSeconds(seconds => seconds + 1)
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isActive, seconds])

  return (<div className={name}>{formatTime(seconds)}</div>)
}

export default Timer;