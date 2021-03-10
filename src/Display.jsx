import React from 'react'

const Display = (props) => {
  
  return (
    <div className="Display">
      <div className="Input">
        <div>{props.value}</div>
      </div>
      <div className="Output">
        <div>{props.output}</div>
      </div>
    </div>
  )
}

export default Display;
