import React from 'react'

const Operators = (onChange) => {
  return (
    <div className="Operators">
      <button onClick={onChange.onChange}>+</button>
      <button onClick={onChange.onChange}>-</button>
      <button onClick={onChange.onChange}>/</button>
      <button onClick={onChange.onChange}>*</button>
    </div>
  )
}


export default Operators;