import React, { useState } from 'react'
import './App.css';
import Display from './Display.jsx';
import Operators from './Operators.jsx';
import Numbers from './Numbers.jsx';
import Actions from './Actions.jsx';


const Calculator = () => {
  const [currentEquation, setCurrentEquation] = useState('');
  const [currentOutput, setCurrentOutput] = useState('');
  const [currentInputHasDot, setCurrentInputHasDot] = useState(false);
  const addAndSubtract = /[\+\-]/;
  const multiplyAndDivide = /[\*\/]/;

  const handleOperatorClick = e => {
    let value = e.target.innerText;
    let newValue = '';
    let lastValue = currentEquation.slice(-1);
    let prevLastValue = currentEquation.slice(-2,-1);
    let prevPrevLastValue = currentEquation.slice(-3,-2);
    setCurrentInputHasDot(false);

    if (!currentEquation) {
      if (value === "-") {
        newValue = currentEquation.concat(value);
      } else {
        return
      }
    } else if (currentOutput || currentOutput.toString()) {
      if (typeof(currentOutput) !== 'number') {
        setCurrentOutput('');
      } else {
        newValue = currentOutput.toString().concat(value);
        setCurrentOutput('');
      }
    } else if (lastValue === value) {
      return
    } 
      else if (multiplyAndDivide.test(lastValue)) {
      if (value === "-") {
        newValue = currentEquation.concat(value);
      } else {
        newValue = currentEquation.slice(0,-1).concat(value);
      } 
    } else if (addAndSubtract.test(lastValue)) {
      if (lastValue === "-" && multiplyAndDivide.test(prevLastValue)) {
        newValue = currentEquation.slice(0,-2).concat(value);
      } else {
        newValue = currentEquation.slice(0,-1).concat(value);
      }
    } else if (lastValue === ".") {
      
      if (multiplyAndDivide.test(prevPrevLastValue) || addAndSubtract.test(prevPrevLastValue)) {
        newValue = currentEquation.slice(0,-3).concat(value);
      } else if (multiplyAndDivide.test(prevLastValue) || addAndSubtract.test(prevLastValue)) {
        newValue = currentEquation.slice(0,-2).concat(value);
      } else {
        newValue = currentEquation.slice(0,-1).concat(value);
      }
    }
      else {
      newValue = currentEquation.concat(value);
    } 
    
    setCurrentEquation(newValue);
  }
  
  const handleNumberClick = e => {
    let value = e.target.innerText;
    let newValue = '';
    
    if (value === '.') {
      if (currentInputHasDot) {
        return
      } else if (currentOutput) {
        setCurrentOutput('');
        setCurrentEquation('');
        setCurrentEquation(value);
      }
      setCurrentInputHasDot(true);
    } 
    
    if (currentOutput) {
      setCurrentOutput('');
      setCurrentEquation('');
      setCurrentEquation(value);
      return
    } else if (currentEquation.length > 20) {
      return
    };

    newValue = currentEquation + value;
    setCurrentEquation(newValue);
    
  }
    
  const handleActionClick = e => {
    let action = e.target.innerText;
    let lastValue = currentEquation.slice(-1);
    let prevLastValue = currentEquation.slice(-2,-1);
    let evaluatedEquation = '';
    let evaluatedEquationDisplay = '';
    setCurrentInputHasDot(false);
    if (action === 'Clear') {
      setCurrentEquation('');
      setCurrentOutput('');
    } else if (action === '=' && (lastValue === '=' || !lastValue || currentEquation === '.')) {
      return
    } else {
      if (multiplyAndDivide.test(lastValue) || addAndSubtract.test(lastValue)) {
        if (multiplyAndDivide.test(prevLastValue) || addAndSubtract.test(prevLastValue)) {
          evaluatedEquation = eval(currentEquation.slice(0,-2));
          evaluatedEquationDisplay = currentEquation.slice(0,-2).concat('=');
        } else {
          evaluatedEquation = eval(currentEquation.slice(0,-1));
          evaluatedEquationDisplay = currentEquation.slice(0,-1).concat('=');
        }
      } else {
        evaluatedEquationDisplay = currentEquation.concat('=');
        evaluatedEquation = eval(currentEquation);
      }
      evaluatedEquation = parseFloat(evaluatedEquation).toFixed(2);
      if (evaluatedEquation.toString().length > 15) {
        evaluatedEquation = 'Character Limit';
      }
      setCurrentOutput(evaluatedEquation);
      setCurrentEquation(evaluatedEquationDisplay);
    }
  }

  return (
    <div className="Calculator">
      <div className="Rainbow-Container">
        <div className="Container">
          <Display value={currentEquation} output={currentOutput}/>
          <Operators onChange={handleOperatorClick}/>
          <Numbers onChange={handleNumberClick}/>
          <Actions onChange={handleActionClick}/>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
