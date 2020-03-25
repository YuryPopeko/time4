import React from 'react';

import './styles.css';

const Control = ({ name, onClick, disabled }) => (
  <button className="timer-control" onClick={onClick} disabled={disabled}><span>{name}</span></button>
);

export default Control;