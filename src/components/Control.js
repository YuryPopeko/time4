import React from 'react';

const Control = ({ name, onClick, disabled }) => (
  <button type="button" className="timer-control" onClick={onClick} disabled={disabled}>
    <span>{name}</span>
  </button>
);

export default Control;