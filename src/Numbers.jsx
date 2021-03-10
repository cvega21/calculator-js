import React from 'react'

const Numbers = (onChange) => {
  
  return (
    <div className="Numbers">
      <div className="NumbersRow">
        <button onClick={onChange.onChange}>1</button>
        <button onClick={onChange.onChange}>2</button>        
        <button onClick={onChange.onChange}>3</button>
      </div>
      <div className="NumbersRow">
        <button onClick={onChange.onChange}>4</button>
        <button onClick={onChange.onChange}>5</button>
        <button onClick={onChange.onChange}>6</button>
      </div>
      <div className="NumbersRow">
        <button onClick={onChange.onChange}>7</button>
        <button onClick={onChange.onChange}>8</button>
      <button onClick={onChange.onChange}>9</button>
      </div>
      <div className="NumbersRow">
        <button onClick={onChange.onChange}>0</button>
        <button onClick={onChange.onChange}>.</button>
      </div>
    </div>
  )
}

export default Numbers;