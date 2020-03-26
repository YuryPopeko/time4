import React from 'react';

import './styles.css';

const Icon = ({ name }) => (
  <svg className="icon"><use xlinkHref={`#${name}`}></use></svg>
);

export default Icon;