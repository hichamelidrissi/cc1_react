// Calculator.js

import React, { useState } from 'react';
import './Calc.css';
import NavResp from './Nav';

const Calculator = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setResult(eval(input).toString());
      } catch (error) {
        setResult('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setResult('');
    } else {
      setInput((prevInput) => prevInput + value);
      setResult(''); // Clear the result when a new input is entered
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C',
  ];

  return (
    <>
    <NavResp />
    <div className="calculator-container">
      <div className="input-container">
        <input className='input' type="text" value={input} readOnly />
      </div>
      <div className="button-container">
        {buttons.map((btn, index) => (
          <button className='button' key={index} onClick={() => handleButtonClick(btn)}>
            {btn}
          </button>
        ))}
      </div>
      <div className="result-container">
        <p>Result: {result}</p>
      </div>
    </div>
    </>
  );
};

export default Calculator;

