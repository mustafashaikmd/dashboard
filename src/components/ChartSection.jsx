import React from 'react';
import PieChart from './PieChart';

function ChartSection() {
  const esignCountData = {
    initiated: 30,
    signed: 246,
    expired: 20,
  };

  const estampCountData = {
    initiated: 30,
    pending: 20,
    signed: 150,
    expired: 10,
  };

  return (
    <section className="chart-section">
      <div className="chart-container">
        <h3>E-sign Count</h3>
        <PieChart className='pie' data={esignCountData} />
      </div>
      <div className="chart-container">
        <h3>E-stamp Count</h3>
        <PieChart className='pie' data={estampCountData} />
      </div>
    </section>
  );
}

export default ChartSection;