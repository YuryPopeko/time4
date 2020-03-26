import React, { useState } from 'react';

import '../styles/App.css';
import Statistics from './statistics';
import Timer from './timer';
import Control from './Control';

const Time4 = () => {
  const [usefullS, setUsefullS] = useState(0);
  const [wastedS, setWastedS] = useState(0);
  const [isUsefullActive, setIsUsefullActive] = useState(false);
  const [isWastedActive, setIsWastedActive] = useState(false);

  const startUsefull = () => {
    if (isWastedActive) {
      setIsWastedActive(false)
    }

    setIsUsefullActive(true)
  };

  const startWasted = () => {
    if (isUsefullActive) {
      setIsUsefullActive(false)
    }

    setIsWastedActive(true)
  }

  return (
    <>
      <Statistics usefullS={usefullS} wastedS={wastedS} />
      <div className="timers">
        <Timer name="usefull" seconds={usefullS} setSeconds={setUsefullS} isActive={isUsefullActive} />
        <Timer name="wasted" seconds={wastedS} setSeconds={setWastedS} isActive={isWastedActive} />
      </div>
      <div className="controls">
        <Control name="usefull" onClick={startUsefull} disabled={isUsefullActive} />
        <Control name="wasted" onClick={startWasted} disabled={isWastedActive} />
      </div>
    </>
  );
}

export default Time4;