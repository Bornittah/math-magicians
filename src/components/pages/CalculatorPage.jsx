import React from 'react';
import Calculator from '../Calculator';

const CalculatorPage = () => (
  <main className="flex space-btn">
    <div className="flex-1">
      <div className="title">
        <h2>Lets do some math!</h2>
      </div>
    </div>
    <div className="flex-1">
      <Calculator />
    </div>
  </main>
);

export default CalculatorPage;
