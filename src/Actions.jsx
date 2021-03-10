import React from 'react'

const Actions = (onChange) => {
  return (
    <div className="Actions">
      <button onClick={onChange.onChange} className="Clear">Clear</button>
      <button onClick={onChange.onChange} className="Equals">=</button>    
    </div>
  )
}

export default Actions
