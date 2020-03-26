import React, { useState } from 'react';
import PieChart from 'react-minimal-pie-chart';

import Icon from '../icon'

import './styles.css';

const Statistics = ({ usefullS, wastedS }) => {
  const haveNoData = usefullS === 0 && wastedS === 0;
  const [isOpen, setIsOpen] = useState(false);
  const toggleStatistics = () => setIsOpen(!isOpen);

  return (
    <>
      <button className="show-statistics icon" onClick={toggleStatistics}>
        <Icon name={isOpen ? 'close' : 'statistics'} />
      </button>
      <div className={`statistics-modal${isOpen ? ' open' : ''}`}>
        {haveNoData
          ? <p>You have no data</p>
          : <PieChart
            data={[
              { title: 'Usefull', value: usefullS, color: 'green' },
              { title: 'Wasted', value: wastedS, color: '#772323' }
            ]}
          />
        }
      </div>
    </>
  )
};

export default Statistics;